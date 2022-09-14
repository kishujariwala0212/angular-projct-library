import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/jwt.service';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-mainprofile',
  templateUrl: './mainprofile.component.html',
  styleUrls: ['./mainprofile.component.css']
})
export class MainprofileComponent implements OnInit {

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
      if(this.data.username !== 'admin'){
      this.Router.navigate(['/login']);
      }

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
