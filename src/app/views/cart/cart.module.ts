import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './smart/cart/cart.component';
import { CartStateModule } from './cart-state/cart-state.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    CartStateModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
