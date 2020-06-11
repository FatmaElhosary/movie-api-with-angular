import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovie=[];
  term:string;
  posterPathPrefix="https://image.tmdb.org/t/p/w500";
  constructor( _MoviesService:MoviesService) { 
    _MoviesService.getTrendingMovies().subscribe( (movieData)=>{
      this.trendingMovie=movieData.results;
    },(err)=>{console.log(err);});
  }
  
  ngOnInit(): void {
  }

}
