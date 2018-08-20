import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzasComponent } from './smart/pizzas/pizzas.component';
import { PizzasServiceModule } from './state/pizzas-service.module';

@NgModule({
  imports: [
    CommonModule,
    PizzasRoutingModule,
    PizzasServiceModule
  ],
  declarations: [PizzasComponent]
})
export class PizzasModule { }
