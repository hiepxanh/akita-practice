import { Injectable } from "@angular/core";
import { CartStateModule } from "./cart-state.module";
import { CartStore } from "./cart.store";
import { CartQuery } from "./cart.query";
import { Product } from "@app/models/product";
import { createCartItem } from "@app/models/cart";

@Injectable({providedIn: CartStateModule})

export class CartService {
    constructor(
        private cartStore: CartStore,
        private cartQuery: CartQuery
    ) {

    }

    addProductToCart(productId: Product['id']) {
        const findItem = this.cartQuery.getEntity(productId);

        if (findItem) {
            return this.cartStore.updateQuantity(productId);
        }

        const item = createCartItem({productId});

        return this.cartStore.add(item);
    }

    remove(productId: Product['id']) {
        return this.cartStore.remove(productId);
    }
}