import { Injectable } from "@angular/core";
import { EntityStore, EntityState } from "@datorama/akita";
import { CartItem } from "@app/models/cart";
import { CartStateModule } from "./cart-state.module";
import { Product } from "@app/models/product";

export interface CartState extends EntityState<CartItem> {}
@Injectable({providedIn: CartStateModule})

export class CartStore extends EntityStore<CartState, CartItem> {
    constructor() {
        super({},{idKey: 'productId'})
    }

    updateQuantity(productId: Product['id'], operand = 1) {
        this.update(productId, entity => {
            const newQuantity = entity.quantity + operand;
            return {
                ...entity,
                quantity: newQuantity
            }
        })
    }
}