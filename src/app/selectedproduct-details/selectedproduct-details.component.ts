import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface productDetails {
  description:string
  id: number
  name: string
  price: number
  quantity: number
}
@Component({
  selector: 'app-selectedproduct-details',
  templateUrl: './selectedproduct-details.component.html',
  styleUrls: ['./selectedproduct-details.component.sass']
})
export class SelectedproductDetailsComponent implements OnInit {
  displayedColumns: string[] = ['sno','name', 'price','quantity','num','remove'];
constructor( @Inject(MAT_DIALOG_DATA) public data:productDetails,public dialogRef: MatDialogRef<SelectedproductDetailsComponent>,) { }
productDetail:any ;
  ngOnInit() {
  }
  removeUnit(data,i) {
      this.productDetail = this.productDetail.filter((value,key)=>{
        return value.id != data.id;
      });
  }

  getTotalCost() {
    console.log(JSON.stringify(this.data))
    this.productDetail =this.data
   return this.productDetail.map(d => d.num).reduce((acc, value) => (acc + value), 0);
  }
  closeDialoge(): void {
    this.dialogRef.close();
  } 
}

