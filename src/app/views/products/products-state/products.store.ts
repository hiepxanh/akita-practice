import { Injectable } from "@angular/core";
import { ProductsStateModule } from "./products-state.module";
import { EntityState, EntityStore } from "@datorama/akita";
import { Product } from "@app/models/product";

export interface ProductsState extends EntityState<Product> {}

@Injectable({providedIn: ProductsStateModule})

export class ProductsStore extends EntityStore<ProductsState, Product> {
    constructor() {
        super();
    }
}
