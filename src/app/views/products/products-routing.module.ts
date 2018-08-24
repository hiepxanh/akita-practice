import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './smart/products/products.component';
import { ProductComponent } from './dumb/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':id',
    loadChildren: '../product/product.module#ProductModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
