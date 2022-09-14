

import { JwtService } from './../../jwt.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserDataService } from 'src/app/services/userdata.service';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:any;
  data:any;
  profile:any;
  JWT :any;

  user:any;

  regiserForm=new UntypedFormGroup({
    "username" : new UntypedFormControl(null),
    "password": new UntypedFormControl(null)

})

  constructor(private http:HttpClient,private Router:Router, private JwtService:JwtService, private userdata:UserDataService, private cookie:CookieService ) { }

  ngOnInit(): void {
    this.JWT = this.cookie.get('JWT');
    console.log(this.JWT);
    this.profile = this.JWT;
    console.log(this.profile)

  }

  submiteData(){
    this.http.post('http://192.168.1.65:7000/users/login',this.regiserForm.value)
    .subscribe((result)=>{

      console.warn("result",result);
      this.data = result;
      this.userdata.user=this.data.user;
      this.cookie.set('JWT',this.data.JWT);
       this.JWT = this.cookie.get('JWT');

      if(this.cookie){
        this.profile=true;
      }
      console.warn(this.data._id);

      // alert(this.data._id);
      console.log(this.data)
      this.JwtService.jwt=this.JWT;
      if(this.JWT){
        if(this.data.user.username !== "admin"){
          console.log(this.data.user.username);
          this.userdata.profile=this.profile
      }
        else{
        this.userdata.admin = true }
        console.log(this.userdata.admin)

      this.user = this.data.user
      console.log(this.JWT)
      console.log(this.user);
    if(this.data.user._id){

      if(this.data.user.username == 'admin'){
        this.cookie.set('user','admin');
        this.Router.navigate(['/mainprofile'])

      }
      else if(this.data.user.username == this.regiserForm.value.username){
        this.cookie.set('user','user');
        this.Router.navigate([''])
      }
    }
  }
    },(error)=>{
      console.log(error);
      alert(error.error.message)
      this.error= error.error.message;
    }
    )
  }
  peta="x"
  updateData(item:string){
      console.warn(item)
      this.peta=item
  }

}
