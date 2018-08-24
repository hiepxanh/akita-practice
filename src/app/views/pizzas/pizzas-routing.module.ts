import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzasComponent } from './smart/pizzas/pizzas.component';

const routes: Routes = [
  {
    path:'',
    component: PizzasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
