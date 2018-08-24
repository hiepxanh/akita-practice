import { PizzasStore } from "./pizzas.store";

import { ID } from "@datorama/akita";
import { Topping } from "@app/models/pizza";
import { Injectable } from "@angular/core";
import { PizzasServiceModule } from "./pizzas-service.module";

@Injectable({providedIn: PizzasServiceModule})
export class PizzasService {
    constructor(private pizzasStore: PizzasStore) {}

    add() {
        this.pizzasStore.addNewPizza();
    }

    setActivePizza(id: ID) {
        this.pizzasStore.setActive(id);
    }

    toggleTopping(topping: Topping, activePizzaID: ID) {
        this.pizzasStore.toggleTopping(topping,activePizzaID)
    }
}