import { Injectable } from '@angular/core';
import { ActorsStore } from './actors.store';
import { HttpClient } from '@angular/common/http';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

@Injectable({ providedIn: MoviesStateModule })
export class ActorsService {

  constructor(private actorsStore: ActorsStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get(url).subscribe((entities) => {
      // this.{actorsStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity) => {
      // this.{actorsStore.add(entity);
    // });
  }

}
