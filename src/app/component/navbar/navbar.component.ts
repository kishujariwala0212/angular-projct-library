import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/userdata.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { OrderService } from 'src/app/service/order.service';







@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login=true;
  showp:any;
  non:any;
  profile:any;
  loginbtn:any;
  cartitems:any;
  admin:any;
  open:any;
  close:any;
  userid :any;
  adminid:any;
  mainprofile:any;
  log:any;
  user:any;
  JWT:any;
  data:any;
  // buyorder:any;


  constructor(private http:HttpClient,private userdata:UserDataService , private cookie:CookieService, private order:OrderService) {
    // console.log(this.userdata.admin);
    // this.userdata.prfl();
    // console.log(this.userdata.data);
    // this.user=this.userdata.data;
    // console.log(this.user)

      // this.cartitems = this.order.buyorder.usercartdata.length
      if(this.cookie.get('user') == 'admin' ) {
        this.admin = true;
        // this.loginbtn=false;
        this.profile = false;
      }
      else if(this.cookie.get('user') == 'user'){
      // this.profile = this.cookie.get('JWT');
      this.profile = true;
        this.loginbtn=false;
      }
      else{
        this.loginbtn=true;
      }

      this.JWT=this.cookie.get('JWT');
      console.log(this.JWT);
      const header = new HttpHeaders({
        'Authorization':`Bearer ${this.JWT}`

      })
      console.log(header);
      this.http.get('http://192.168.1.65:7000/admin/profileOfUser',{headers:header})
      .subscribe((result)=> {
        this.data = result;
        console.log(this.data);
        this.user = this.data;
        console.log(this.user);

      }
      // ,(error)=>{
      //   this.Router.navigate(['/login']);
      //   console.log(error);

      // }
      )
  }

  ngOnInit(): void {



  }





  show(){

    // this.showp=document.getElementById('imag');
    // if (this.showp.style.display === "none") {
    //   this.showp.style.display = "block";
    // } else {
    //   this.showp.style.display = "none";
    // }
    // this.showp.style.display='block';

    // this.showp.classList.toggle('mystyle')
    console.log(this.userdata)
    // console.log(this.profile);


  }
  openNav() {
    this.open =  document.getElementById("mySidenav");
    this.open.style.width="250px";
  }

   closeNav() {

    this.close =  document.getElementById("mySidenav");
    this.close.style.width="0";

  }

}
