import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUserMngComponent } from './admin-user-mng/admin-user-mng.component';
import { AdminProductMngComponent } from './admin-product-mng/admin-product-mng.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { SearchPipe } from './pipes/search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminUserMngComponent,
    AdminProductMngComponent,
    AdminAddProductComponent,
    EditProductComponent,
    SingleproductComponent,
    UserLoginComponent,
    UserRegisterComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
