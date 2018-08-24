import { StoreConfig, EntityStore, getInitialActiveState, EntityState, ActiveState, toggle, ID } from "@datorama/akita";
import { Pizza, createPizza, Topping } from "@app/models/pizza";
import { Injectable } from "@angular/core";
import { PizzasServiceModule } from "./pizzas-service.module";

export interface PizzasState extends EntityState<Pizza>, ActiveState {}

const state = {
    ...getInitialActiveState()
}

@StoreConfig({name: "pizzas"})
@Injectable({providedIn: PizzasServiceModule})
export class PizzasStore extends EntityStore<PizzasState,Pizza> {
    constructor() {
        super(state);
        this.addNewPizza();
    }

    addNewPizza() {
        const newPizza = createPizza();
        this.add(newPizza);
        this.setActive(newPizza.id);
    }

    toggleTopping(topping: Topping, activePizzaID: ID) {
        this.update(activePizzaID, pizza => {
            return {
                ... pizza,
                toppings: toggle(pizza.toppings, topping)
            }
        })
    }
}