import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BuyPipe } from './buy.pipe';
import { TremtextPipe } from './tremtext.pipe';
import { SearchPipe } from './search.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { MyHttInterceptor } from './shared/services/my-htt.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MyloadingInterceptor } from './shared/services/myloading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    CategoriesComponent,
    CartComponent,
    LoginComponent,
    FooterComponent,
    NavbarAuthComponent,
    NavbarBlankComponent,
    NotfoundComponent,
    ProductsComponent,
    RegisterComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    DetailsComponent,
    BuyPipe,
    TremtextPipe,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, //ngx
    CarouselModule,   //ngx
    FormsModule ,
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule,
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : MyHttInterceptor , multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyloadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
