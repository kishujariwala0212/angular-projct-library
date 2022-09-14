import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { JwtService } from 'src/app/jwt.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  errors:any;
  orderdata:any;
  JWT:any;
  Httpheaders:any;
  // cookie:any;


  constructor( private order:OrderService, private http:HttpClient, private cookie:CookieService,private JwtService:JwtService ) {

  }



  ngOnInit(): void {
    this.JWT = this.cookie.get('JWT');
    // this.jwt=this.jwts.jwt;
    this.Httpheaders = new HttpHeaders({
      'Authorization':`Bearer ${this.JWT}`

    })

    this.orderdata =  new FormGroup({
      "name" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "pno" : new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "address" : new FormControl(null,[Validators.required]),
      "city" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "state" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "pincode" : new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    })

  }

  submitdata(){
    if(this.orderdata.valid){
      alert(`Thankyou ${this.orderdata.value.name}`

      )
     }
    console.log(this.order.buyorder)
    console.log(this.orderdata.value)
    this.apifetch();
      this.orderdata.reset();



  }

  apifetch(){
    this.http.post('http://192.168.1.65:7000/user/book/proceedToCheckout',{order:this.orderdata.value, cart: this.order.buyorder} ).subscribe((data)=>{
      console.log(data);

    })

  }
  get name() { return this.orderdata.get('name'); }
  get pno() { return this.orderdata.get('pno'); }
  get address() { return this.orderdata.get('address'); }
  get city() { return this.orderdata.get('city'); }
  get state() { return this.orderdata.get('state'); }
  get pincode() { return this.orderdata.get('pincode'); }
}
