import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product',
  template: `
  <div>{{product.name}}</div>
  <div>{{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}}</div>
  <div fxLayout="row" fxLayoutAlign="center center"> <div> <img (click)="addProductToCart(product)" class="images" src={{product.image}}/></div>
  </div>`,
  styles: [`
  :host {
    display: grid;
   
    border: 1px solid blue;
    padding: 1px;
  }
  div:nth-child(1) {font-weight: bold;}
  `]
})
export class ProductComponent  {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}