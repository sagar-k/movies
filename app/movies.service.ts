import { Injectable } from '@angular/core';
import { MOVIES } from './mock.movie.service';
import Movie from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  col:  string;

  constructor() { }

  getMovies(): Movie[] {
    return MOVIES;
  }
  searchMovie(searchText): Movie[] {
    let movies: Movie[]; 

    if(!searchText) {
      return MOVIES;
    }
    return MOVIES.filter(function(obj) {
      return Object.keys(obj).some(function(key) {
        return obj[key].toString().indexOf(searchText)!=-1;
      })
    });
  }
  getfetchMovies(index, pageSize): Movie[] {
    let requiredPage = index +  pageSize;

    if(requiredPage <=  MOVIES.length) {
      return MOVIES.slice(index, (index + pageSize));
    } else {
      return MOVIES;
    }
  }

  compare(a, b): any {
    // Use toUpperCase() to ignore character casing
    const genreA = a[this.col].toUpperCase();
    const genreB = b[this.col].toUpperCase();
  
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }

  sort(column): Movie[] {
    this.col = column; 
    return MOVIES.sort(this.compare)
  } 
}
