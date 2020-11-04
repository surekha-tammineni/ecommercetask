import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  template: `
  <h1><mat-icon>add_shopping_cart</mat-icon> ({{calcTotal()}})</h1>
  `,
  styles: [`:host{border: 1px solid #000; }`]
})
export class ShoppingCartComponent  {
  @Input() products: any[];
  calcTotal() {
   // console.log("cart",this.products)
    return this.products.reduce((acc, prod) => acc+= prod.num ,0)
  }
  
}