import { Injectable } from '@angular/core';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

@Injectable({providedIn: MoviesStateModule})
export class MoviesDataService {
    
    constructor(    
    ) {

    }

    getMovies() {

    }
}