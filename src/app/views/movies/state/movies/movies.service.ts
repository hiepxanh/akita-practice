import { Injectable } from '@angular/core';
import { MoviesStore } from './movies.store';
import { HttpClient } from '@angular/common/http';
import { MoviesStateModule } from '../../movies-state/movies-state.module';
import { ActorsStore } from '../actors/actors.store';
import { GenresStore } from '../genres/genres.store';
import { MoviesDataService } from './movies-data.service';
import { ID } from '@datorama/akita';

@Injectable({ providedIn: MoviesStateModule })
export class MoviesService {

  constructor(
    private moviesStore: MoviesStore,
    private http: HttpClient,
    private actorsStore: ActorsStore,
    private genresStore: GenresStore,
    private moviesDataService: MoviesDataService
  ) {
  }

  getMovies() {
    this.moviesDataService.getMovies().subscribe(response => {
      this.actorsStore.set(response.entities.actors);
      this.genresStore.set(response.entities.genres);
      const movies = {
        entities: response.entities.movies,
        ids: response.result
      }
      this.moviesStore.set(movies);
    })
  }

  updateActorName(id: ID, name: string) {
    this.actorsStore.update(id, { name });
  }

}
