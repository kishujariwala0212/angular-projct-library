import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { SignupComponent } from './component/signup/signup.component';
import { TredingComponent } from './component/treding/treding.component';
import { BooksComponent } from './component/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { CartComponent } from './component/cart/cart.component';
import { SpacesComponent } from './component/spaces/spaces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminindexComponent } from './admin/adminindex/adminindex.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { AddbokkComponent } from './admin/addbokk/addbokk.component';
import { MainprofileComponent } from './admin/mainprofile/mainprofile.component';
import { UserComponent } from './admin/user/user.component';
import { UsersqueryComponent } from './admin/usersquery/usersquery.component';
import { EditbookComponent } from './admin/editbook/editbook.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { SidenavbarComponent } from './component/sidenavbar/sidenavbar.component';
import { ForgetpassComponent } from './component/forgetpass/forgetpass.component';
import { EditprofileComponent } from './component/editprofile/editprofile.component';
import { OrderComponent } from './component/order/order.component';
import { ChangebookComponent } from './admin/changebook/changebook.component';
import { OrderdataComponent } from './admin/orderdata/orderdata.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    ContactComponent,
    SignupComponent,
    TredingComponent,
    BooksComponent,
    BookdetailsComponent,
    CartComponent,
    SpacesComponent,
    AdminindexComponent,
    ProfileComponent,
    AddbokkComponent,
    MainprofileComponent,
    UserComponent,
    UsersqueryComponent,
    EditbookComponent,
    UserprofileComponent,
    SidenavbarComponent,
    ForgetpassComponent,
    EditprofileComponent,
    OrderComponent,
    ChangebookComponent,
    OrderdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
