import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../state/movies/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../state/movies/movie.model';
import { MoviesQuery } from '../../state/movies/movies.query';
import { ActorsQuery } from '../../state/actors/actors.query';
import { ID } from '@datorama/akita';
import { Actor } from '../../state/actors/actor.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;
  actors$ : Observable<Actor[]>;
  private edits = new Set();

  constructor(
    private moviesQuery: MoviesQuery,
    private actorsQuery: ActorsQuery,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.isLoading$ = this.moviesQuery.selectLoading();
    this.movies$ = this.moviesQuery.selectMovies();
    this.actors$ = this.actorsQuery.selectAll();
    this.moviesService.getMovies();
  }

  edit(id: ID, name: string) {
    this.moviesService.updateActorName(id,name);
    this.edits.delete(id);
  }

  toggleView(id: ID, actorName: HTMLInputElement) {
    if(this.edits.has(id)) {
      this.edits.delete(id);
    } else {
      this.edits.add(id);
      actorName.focus();
    }
  }

  inEditMode(id: ID) {
    return this.edits.has(id);
  }

}
