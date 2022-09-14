import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error:any;
  formData=new UntypedFormGroup({
    "firstname" : new UntypedFormControl(null),
    "lastname": new UntypedFormControl(null),
    "email": new UntypedFormControl(null),
    "phone": new UntypedFormControl(null),
    "username": new UntypedFormControl(null),
    "password": new UntypedFormControl(null),
    "c_password": new UntypedFormControl(null)
})


  constructor(private http:HttpClient,private Router:Router) { }
  save : any
  showPassword:any;
  // Router:any;
  mmm:any;



  ngOnInit(): void {
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  submitData(){
    // console.log(this.formData.value);

    this.http.post('http://192.168.1.65:7000/user/signup',this.formData.value)


    .subscribe((result)=>{
      console.warn("result",result);
      this.formData.reset();
      this.mmm=result;
      alert(this.mmm.message);
      this.Router.navigate(['/login']);



    },(error)=>{
      console.log(error.error.message);
      alert(error.error.message)
      this.error= error.error.message;
    }
    )
  }

}



