import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsQuery } from '../../products-state/products.query';
import { Observable } from 'rxjs';
import { Product } from '@app/models/product';
import { ProductsService } from '../../products-state/products.service';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  search = new FormControl();

  constructor(
    private productsService: ProductsService,
    private productsQuery: ProductsQuery
  ) { }

  ngOnInit() {
    this.productsService.get().subscribe();

    this.loading$ = this.productsQuery.selectLoading();

    this.products$ = this.search.valueChanges.pipe(
      startWith(''),
      switchMap(value => this.productsQuery.getProducts(value))
    )
  }

}
