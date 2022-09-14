import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-adminindex',
  templateUrl: './adminindex.component.html',
  styleUrls: ['./adminindex.component.css']
})
export class AdminindexComponent implements OnInit {

  constructor(private Router:Router, private cookie:CookieService) { }
  open:any;
  close:any;

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
      this.Router.navigate(["/mainprofile"]);
    }

  }

}
