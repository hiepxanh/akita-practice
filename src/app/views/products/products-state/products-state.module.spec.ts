import { ProductsStateModule } from './products-state.module';

describe('ProductsStateModule', () => {
  let productsStateModule: ProductsStateModule;

  beforeEach(() => {
    productsStateModule = new ProductsStateModule();
  });

  it('should create an instance', () => {
    expect(productsStateModule).toBeTruthy();
  });
});
