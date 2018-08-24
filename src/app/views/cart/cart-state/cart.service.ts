import { Injectable } from "@angular/core";
import { CartStore } from "./cart.store";
import { CartQuery } from "./cart.query";
import { Product } from "@app/models/product";
import { createCartItem } from "@app/models/cart";
import { toBoolean } from "@datorama/akita";

@Injectable({providedIn: 'root'})

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

    subtract(productId: Product['id']) {
        const findItem = this.cartQuery.getEntity(productId);
        if (toBoolean(findItem)) {
          if (findItem.quantity === 1) {
            return this.cartStore.remove(productId);
          }
    
          return this.cartStore.updateQuantity(findItem.productId, -1);
        }
      }

    remove(productId: Product['id']) {
        return this.cartStore.remove(productId);
    }
}