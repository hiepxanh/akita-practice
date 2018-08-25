import { ID } from '@datorama/akita';
import { Genre } from '../genres/genre.model';
import { Actor } from '../actors/actor.model';

export interface Movie {
  id: ID;
  title: string;
  genres: (ID | Genre)[];
  actors: (ID | Actor)[];
}

/**
 * A factory function that creates Movies
 */
export function createMovie(params: Partial<Movie>) {
  return {

  } as Movie;
}
