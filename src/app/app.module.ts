import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { CategorySearchComponent } from './Components/category-search/category-search.component';
import { ProductsComponent } from './Components/products/products.component';
import { EveryDayProductComponent } from './Components/every-day-product/every-day-product.component';
import { ShopByCategoryComponent } from './Components/shop-by-category/shop-by-category.component';
import { FilterComponent } from './Components/filter/filter.component';
import { SubHeaderComponent } from './Components/sub-header/sub-header.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategorySearchComponent,
    ProductsComponent,
    EveryDayProductComponent,
    ShopByCategoryComponent,
    FilterComponent,
    SubHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
