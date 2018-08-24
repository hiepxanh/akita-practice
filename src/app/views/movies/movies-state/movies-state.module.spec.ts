import { MoviesStateModule } from './movies-state.module';

describe('MoviesStateModule', () => {
  let moviesStateModule: MoviesStateModule;

  beforeEach(() => {
    moviesStateModule = new MoviesStateModule();
  });

  it('should create an instance', () => {
    expect(moviesStateModule).toBeTruthy();
  });
});
