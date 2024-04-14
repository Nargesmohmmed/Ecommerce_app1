import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';

const routes: Routes = [

  {path: '',
  canActivate:[authGuard],
  component:BlankLayoutComponent ,
  children: [

    {path: '' , redirectTo:'home' , pathMatch:'full' ,title: 'Home'},
    {path: 'home' , component: HomeComponent , title: 'Home'},
    {path: 'cart' , component: CartComponent , title: 'Cart'},
    {path: 'allorders' , component: AllordersComponent , title: 'Allorders'},
    {path: 'checkout/:id' , component: CheckoutComponent , title: 'Checkout'},
    {path: 'product' , component: ProductsComponent , title: 'Product'},
    {path: 'details/:id' , component: DetailsComponent , title:'Details'},
    {path: 'categories' , component: CategoriesComponent , title: 'Categories'},
    {path: 'brands' , component: BrandsComponent , title: 'Brands'},

  ]},
  {path: '', component:AuthLayoutComponent , children: [

    {path: 'login', component:LoginComponent , title: 'Login'},
    {path: 'register', component:RegisterComponent , title: 'Register'},

  ]},

  {path: '**', component:NotfoundComponent , title: 'Notfound'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
