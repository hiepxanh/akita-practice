import { Injectable } from "@angular/core";
import { CartStateModule } from "./cart-state.module";
import { QueryEntity } from "@datorama/akita";
import { CartItem } from "@app/models/cart";
import { CartStore, CartState } from './cart.store'
import {  publishReplay, map, refCount } from "rxjs/operators";
import { ProductsQuery } from "../../products/products-state/products.query";
import { combineLatest } from "rxjs";

@Injectable({providedIn: 'root'})
export class CartQuery extends QueryEntity<CartState, CartItem> {
    constructor(
        protected store: CartStore,
        private productsQuery: ProductsQuery
    ) {
        super(store)
    }

    selectItems$ = combineLatest(
        this.selectAll(),
        this.productsQuery.selectAll({asObject: true})
    ).pipe(
        map(joinItems),
        publishReplay(),
        refCount()
    )

    selectTotal$ = this.selectItems$.pipe(
        map(items => items.reduce((acc, item) => acc+item.total,0))
    )
}

function joinItems([cartItems, products]) {
    return cartItems.map(cartItem => {
        const product = products[cartItem.productId];
        return {
            ...cartItem,
            ...product,
            total: cartItem.quantity * product.price
        }
    })
}