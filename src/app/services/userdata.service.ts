import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  login:any;
  profile:any;
  admin:any;
  user:any;
  JWT:any;
  data:any;
  url="http://192.168.1.65:7000/users/allusers";
  constructor(private https:HttpClient, private cookie:CookieService) {
    this.prfl();
  }
  users()
  {
    return this.https.get(this.url)
  }
  prfl(){
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

    }
    // ,(error)=>{
    //   this.Router.navigate(['/login']);
    //   console.log(error);

    // }
    )
  }

}
