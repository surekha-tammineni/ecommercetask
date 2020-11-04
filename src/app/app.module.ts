import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { CartProductComponent } from './card-product.component';
import { ProductListComponent } from './product-list.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ProductComponent } from './product.component';
import { MaterialModule } from './materialModule';
import { HttpClientModule } from '@angular/common/http';
import { SelectedproductDetailsComponent } from './selectedproduct-details/selectedproduct-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent, ShoppingCartComponent, ProductComponent, CartProductComponent, SelectedproductDetailsComponent
  ],
  entryComponents:[SelectedproductDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,MatDialogModule,
    MatTableModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,MatDialogModule,MatTableModule,FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
