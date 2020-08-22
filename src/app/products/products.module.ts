import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialsModule} from "../materials/materials.module";
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import {ProductDataService} from './product-data.service';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,MaterialsModule

  ],
  providers:[ProductDataService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ProductsModule { }
