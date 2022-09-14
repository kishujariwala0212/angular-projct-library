import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/jwt.service';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  data:any;
  JWT:any;
  condition :any ;
  constructor( private JwtService:JwtService, private https:HttpClient, private Router:Router ,private cookie:CookieService ) {

   }
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.JWT=this.cookie.get('JWT');
    console.log(this.JWT);
    const header = new HttpHeaders({
      'Authorization':`Bearer ${this.JWT}`

    })
    console.log(header);
    this.https.get('http://192.168.1.65:7000/admin/profileOfUser',{headers:header})
    .subscribe((result)=> {
      this.data = result;
      console.log(this.data);
      if(this.data.username == 'admin'){
        this.condition = true;
      }
      if(this.data.username != 'admin'){
      this.condition = false;
      this.Router.navigate(['']);
      }

    }
    ,(error)=>{
      this.condition = false;
      this.Router.navigate(['']);
      console.log(error);

    }
    )
     console.log(this.condition);

      return this.condition;
  }

}
