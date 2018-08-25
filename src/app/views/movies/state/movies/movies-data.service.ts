import { Injectable } from '@angular/core';
import { MoviesStateModule } from '../../movies-state/movies-state.module';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import {movies} from './data'
@Injectable({providedIn: MoviesStateModule})
export class MoviesDataService {
    
    constructor(    
    ) {

    }
    // getMovies() {
    //     const actor = new schema.Entity('actors');
    //     const genre = new schema.Entity('genres');
    //     const movie = new schema.Entity('movies', {
    //     genres: [genre],
    //     actors: [actor],
    //     });
    //     const getMovies = movies => normalize(movies, [movie]);

    //     return timer(1000).pipe(mapTo(getMovies));
    //   }

    getMovies() {
        return timer(1000).pipe(mapTo(movies));
      }
}