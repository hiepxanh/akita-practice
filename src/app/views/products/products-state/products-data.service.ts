import { Injectable } from "@angular/core";
import { ProductsStateModule } from "./products-state.module";
import { timer, Observable } from "rxjs";
import { Product } from "@app/models/product";
import { mapTo } from "rxjs/operators";
import { mockProducts } from "./mock-products";

@Injectable({providedIn: ProductsStateModule})

export class ProductsDataService {
    get(): Observable<Product[]> {
        return timer(500)
        .pipe(mapTo(mockProducts))
    }
}