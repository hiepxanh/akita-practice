import { CartStateModule } from './cart-state.module';

describe('CartStateModule', () => {
  let cartStateModule: CartStateModule;

  beforeEach(() => {
    cartStateModule = new CartStateModule();
  });

  it('should create an instance', () => {
    expect(cartStateModule).toBeTruthy();
  });
});
