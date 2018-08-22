import { Injectable } from "@angular/core";
import { ProductsStateModule } from "./products-state.module";
import { QueryEntity } from "@datorama/akita";
import { Product } from "@app/models/product";
import { ProductsStore, ProductsState } from "./products.store";


@Injectable({providedIn: ProductsStateModule})
export class ProductsQuery extends QueryEntity<ProductsState, Product> {
    constructor(protected store: ProductsStore) {
        super(store);
    }

    getProducts(value: string) {
        return this.selectAll({
            filterBy: entity => entity.title.toLowerCase().includes(value)
        })
    }
}