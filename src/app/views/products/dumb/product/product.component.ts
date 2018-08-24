import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() add = new EventEmitter<Product>();
  @Output() subtract = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

}
