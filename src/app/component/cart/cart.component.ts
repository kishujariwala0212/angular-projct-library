import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtService } from 'src/app/jwt.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartdata:any;
  data:any;
  jwt:any;
  Httpheaders:any;
  subtotal :any ;
  Alldata :any;
  bookprice:any;



  constructor( private https:HttpClient, private Route:Router, private jwts:JwtService, private cookie:CookieService,private order:OrderService ) {
    this.ngOnInit();
   }


   addquantity(el:any,qty:any){
     qty += 1;
     console.log(qty);
    let data = {
      _id :el,
      qty:qty
    }
     this.https.post('http://192.168.1.65:7000/user/book/qtyUpdate',data)


     .subscribe((result)=>{

       console.warn("result",result);
     },(error)=>{
       console.log(error);
       alert(error.error.message)

     }
     )
     this.ngOnInit();
   }

   removequantity(el:any,qty:any){
    qty -= 1;
    console.log(qty);
   let data = {
     _id :el,
     qty:qty
   }
    this.https.post('http://192.168.1.65:7000/user/book/qtyUpdate',data)


    .subscribe((result)=>{

      console.warn("result",result);
    },(error)=>{
      console.log(error);
      alert(error.error.message)

    }
    )
    this.ngOnInit();

   }
  ngOnInit(): void {
    this.jwt = this.cookie.get('JWT');
    // this.jwt=this.jwts.jwt;
    this.Httpheaders = new HttpHeaders({
      'Authorization':`Bearer ${this.jwt}`

    })

    this.https.get('http://192.168.1.65:7000/user/book/cartdata',{headers:this.Httpheaders})


    .subscribe((result)=>{

      // console.warn("result",result);
      // console.log(result);
      this.Alldata = result;
      this.order.buyorder = this.Alldata;
      console.log(this.order.buyorder)
      this.cartdata = this.Alldata.usercartdata;
      this.subtotal = this.Alldata.subtotal;
      // console.log(this.cartdata);
    },(error)=>{
      console.log(error);
      alert(error.error.message)

    }
    )


}


  }


