import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ActorsStore, ActorsState } from './actors.store';
import { Actor } from './actor.model';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

@Injectable({ providedIn: MoviesStateModule })
export class ActorsQuery extends QueryEntity<ActorsState, Actor> {

  constructor(protected store: ActorsStore) {
    super(store);
  }

}
