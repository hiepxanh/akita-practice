import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './smart/products-page/products-page.component';
import { ProductComponent } from './dumb/product/product.component';
import { ProductsComponent } from './smart/products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsPageComponent, ProductComponent, ProductsComponent]
})
export class ProductsModule { }
