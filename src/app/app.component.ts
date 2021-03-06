import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import Movie from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService]
})
export class AppComponent implements OnInit{
  movies: Movie[];
  pagination = 2;
  pageIndex: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies().slice(0,3);

   let length = Math.round(this.movies.length / this.pagination);
   this.pageIndex =  new Array(length);
  }

  search(name: string): void {
    name = name.trim();
    if (!name) { 
      this.movies = this.moviesService.getMovies();
    } else {
    this.movies = this.moviesService.searchMovie(name);
    }
  }
  sort(column): void {
    this.movies = this.moviesService.sort(column);
  }

  getfetchMovies(index): void {
    this.movies = this.moviesService.getfetchMovies(index,2);
  }
}
