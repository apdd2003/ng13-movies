import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null;
  movieVideos: MovieVideo[]=[];
  movieImages: MovieImages | null= null;
  movieCredits: MovieCredits | null = null;
  imagesSizes = IMAGE_SIZES;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }
  getMovie(id:string){
    this.moviesService.getMovie(id).subscribe(movieData =>{
      this.movie= movieData;
      console.log(this.movie)
    });
  }
  getMovieVideos(id:string){
    this.moviesService.getMovieVideos(id).subscribe(movieVideoDate=>
      {
        this.movieVideos=movieVideoDate
      })
  }

  getMovieImages(id:string){
    this.moviesService.getMovieImages(id).subscribe((movieImagesData)=>
    {
      this.movieImages=movieImagesData;
    });
  }

  getMovieCredits(id:string){
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData)=>
    {
      this.movieCredits=movieCreditsData;
    });
  }

}
