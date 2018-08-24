import { Observable } from "rxjs";
import { QueryEntity } from "@datorama/akita";
import { PizzasState, PizzasStore } from "./pizzas.store";
import { Pizza, Topping } from "@app/models/pizza";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { PizzasServiceModule } from "./pizzas-service.module";

@Injectable({
    providedIn: PizzasServiceModule
})
export class PizzasQuery extends QueryEntity<PizzasState, Pizza> {
    constructor(protected store: PizzasStore) {
        super(store);
    }

    selectPizzaToppings() : Observable<Topping[]> {
        return this.selectActive().pipe(
            map(pizza => pizza.toppings)
        )
    }
}