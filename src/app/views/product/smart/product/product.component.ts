import { Component, OnInit } from '@angular/core';
import { OnDestroy, untilDestroyed, TakeUntilDestroy } from 'ngx-take-until-destroy';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/products-state/products.service';
import { ProductsQuery } from '../../../products/products-state/products.query';
import { map, filter } from 'rxjs/operators';

@TakeUntilDestroy()
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product$ = this.productsQuery.selectEntity(this.productId);

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private productsQuery: ProductsQuery
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      filter(id => !this.productsQuery.hasEntity(id)),
      untilDestroyed(this)
    )
    .subscribe(id => this.productsService.getProduct(id))
  }

  get productId() {
    return this.activatedRoute.snapshot.params.id;
  }

  ngOnDestroy() {

  }

}
