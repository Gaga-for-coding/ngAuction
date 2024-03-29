import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuctionMaterialModule } from './auction-material/auction-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    CarouselComponent,
    ProductItemComponent,
    ProductDetailComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AuctionMaterialModule
  ],
  providers: [{provide : LocationStrategy, useClass : HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
