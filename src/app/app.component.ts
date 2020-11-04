import { Component } from '@angular/core';
import { CommonService } from './commonService.service';

import {MatDialogModule} from '@angular/material/dialog';
import { SelectedproductDetailsComponent } from './selectedproduct-details/selectedproduct-details.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'suri';

  constructor(private cs:CommonService,public dialog: MatDialog) { }
  ngOnInit(){  
this.getProductList();
  }
  
  openDialog(data={}): void {
    const dialogRef = this.dialog.open(SelectedproductDetailsComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  productList
  cartProductList = [];
  getProductList(){
    this.cs.getData().subscribe(res => {
      this.productList=res.data
      console.log(res.data)
    });
  }
  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
      return;
    }
    productExistInCart.num += 1;
  }

   removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
   }

 }
 