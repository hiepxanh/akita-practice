import { PizzasModule } from './pizzas.module';

describe('PizzasModule', () => {
  let pizzasModule: PizzasModule;

  beforeEach(() => {
    pizzasModule = new PizzasModule();
  });

  it('should create an instance', () => {
    expect(pizzasModule).toBeTruthy();
  });
});
