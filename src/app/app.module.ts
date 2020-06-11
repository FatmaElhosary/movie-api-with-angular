import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UdemyComponent } from './udemy/udemy.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingmoviesPipe } from './trendingmovies.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MovieDetailsComponent,
    NavbarComponent,
    UdemyComponent,
    FooterComponent,
    TrendingmoviesPipe,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     //to use http req
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
