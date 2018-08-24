import { ID } from '@datorama/akita';

export interface Genre {
  id: ID;
}

/**
 * A factory function that creates Genres
 */
export function createGenre(params: Partial<Genre>) {
  return {

  } as Genre;
}
