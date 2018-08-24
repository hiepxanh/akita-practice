import { Injectable } from '@angular/core';
import { MoviesStore } from './movies.store';
import { HttpClient } from '@angular/common/http';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

@Injectable({ providedIn: MoviesStateModule })
export class MoviesService {

  constructor(private moviesStore: MoviesStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get(url).subscribe((entities) => {
      // this.{moviesStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity) => {
      // this.{moviesStore.add(entity);
    // });
  }

}
