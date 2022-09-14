import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtService } from 'src/app/jwt.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  open:any;
  JWT:any;
  data:any;
  close:any;
  constructor(private cookie:CookieService, private JwtService:JwtService, private https:HttpClient, private Router:Router) {
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

      this.Router.navigate([""]);
      console.log(error);

    }
    )
   }

  ngOnInit(): void {
  }
  openNav() {
    this.open =  document.getElementById("mySidenav");
    this.open.style.width="250px";
}
closeNav() {

  this.close =  document.getElementById("mySidenav");
  this.close.style.width="0";

}
logout(){
  // this.cookie.set('JWT',"");
  if (confirm("Are you sure you want to log out")) {
    this.cookie.set('JWT',"")
    this.cookie.set('user',"")
  } else {
    this.Router.navigate(["/userprofile"]);
  }

}
}
