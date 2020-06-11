import { Injectable } from '@angular/core';
//get method get
import { HttpClient } from '@angular/common/http';
//data type observable
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  //dependency injection
  constructor( public _HttpClient:HttpClient) {}
  getTrendingMovies():Observable<any> {

   return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=019457a70f6ec203c76ccdab5647c289');
  }
}
