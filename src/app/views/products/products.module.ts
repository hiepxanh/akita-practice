import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './dumb/product/product.component';
import { ProductsComponent } from './smart/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsStateModule } from './products-state/products-state.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    ProductsStateModule
  ],
  declarations: [ ProductComponent, ProductsComponent]
})
export class ProductsModule { }
