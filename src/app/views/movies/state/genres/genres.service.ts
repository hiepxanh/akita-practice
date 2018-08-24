import { Injectable } from '@angular/core';
import { GenresStore } from './genres.store';
import { HttpClient } from '@angular/common/http';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

@Injectable({ providedIn: MoviesStateModule })
export class GenresService {

  constructor(private genresStore: GenresStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get(url).subscribe((entities) => {
      // this.{genresStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity) => {
      // this.{genresStore.add(entity);
    // });
  }

}
