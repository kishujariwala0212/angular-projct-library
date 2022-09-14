import { OrderdataComponent } from './admin/orderdata/orderdata.component';
import { ChangebookComponent } from './admin/changebook/changebook.component';
import { OrderComponent } from './component/order/order.component';
import { EditprofileComponent } from './component/editprofile/editprofile.component';
import { ForgetpassComponent } from './component/forgetpass/forgetpass.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { EditbookComponent } from './admin/editbook/editbook.component';
import { UsersqueryComponent } from './admin/usersquery/usersquery.component';
import { UserComponent } from './admin/user/user.component';
import { MainprofileComponent } from './admin/mainprofile/mainprofile.component';
import { AddbokkComponent } from './admin/addbokk/addbokk.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { AdminindexComponent } from './admin/adminindex/adminindex.component';
import { SpacesComponent } from './component/spaces/spaces.component';
import { CartComponent } from './component/cart/cart.component';
import { SignupComponent } from './component/signup/signup.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { BooksComponent } from './component/books/books.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'bookdetails/:bookid', component:BookdetailsComponent},
  {path:'book',component:BooksComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'spaces',component:SpacesComponent},
  {path:'admin',canActivate:[GuardGuard],component:AdminindexComponent},
  {path:'profile',canActivate:[GuardGuard],component:ProfileComponent},
  {path:'addbook',canActivate:[GuardGuard],component:AddbokkComponent},
  {path:'mainprofile',canActivate:[GuardGuard],component:MainprofileComponent},
  {path:'user',canActivate:[GuardGuard],component:UserComponent},
  {path:'usersquery',canActivate:[GuardGuard],component:UsersqueryComponent},
  {path:'editbook',canActivate:[GuardGuard],component:EditbookComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'forgetpass',component:ForgetpassComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'order',component:OrderComponent},
  {path:'orderdata',canActivate:[GuardGuard],component:OrderdataComponent},
 {path:'changebook',canActivate:[GuardGuard],component:ChangebookComponent}



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
