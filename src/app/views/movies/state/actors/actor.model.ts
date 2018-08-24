import { ID } from '@datorama/akita';

export interface Actor {
  id: ID;
}

/**
 * A factory function that creates Actors
 */
export function createActor(params: Partial<Actor>) {
  return {

  } as Actor;
}
