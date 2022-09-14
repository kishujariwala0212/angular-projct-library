import { Router } from '@angular/router';
import { JwtService } from './../../jwt.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data:any;
  JWT:any;
  constructor( private JwtService:JwtService, private https:HttpClient, private Router:Router ,private cookie:CookieService ) {
    this.JWT=cookie.get('JWT');
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
    ,(error)=>{
      this.Router.navigate(['/login']);
      console.log(error);

    }
    )
   }

  ngOnInit(): void {


  }

}
