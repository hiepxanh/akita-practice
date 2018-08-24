import { Injectable } from "@angular/core";
import { ProductsStateModule } from "./products-state.module";
import { ProductsQuery } from "./products.query";
import { ProductsDataService } from "./products-data.service";
import { ProductsStore } from "./products.store";
import { Observable } from "rxjs";
import { Product } from "@app/models/product";
import { tap } from "rxjs/operators";
import { noop, ID } from "@datorama/akita";

@Injectable({providedIn: ProductsStateModule})

export class ProductsService {
    constructor(
        private productsStore: ProductsStore,
        private productsQuery: ProductsQuery,
        private productsDataService: ProductsDataService
    ) {

    }

    get(): Observable<Product[]> {
        const request = this.productsDataService.get()
        .pipe(
            tap(response => this.productsStore.set(response))
        );
        return this.productsQuery.isPristine ? request: noop();
    }

    getProduct(id: ID) {
        this.productsDataService.getProduct(id).subscribe(product => {
          this.productsStore.add(product);
        });
      }
}