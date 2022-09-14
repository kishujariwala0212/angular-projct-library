import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  error:any;
  data:any;
  fan:any;
  forgetpass = new FormGroup({
    'username':new FormControl(null)
  })

  constructor( private http:HttpClient,private Router:Router ) { }

  ngOnInit(): void {
     let fan:any = document.getElementById('foo');
    document.addEventListener('click', function(ev){
        fan.style.transform = 'translateY('+(ev.clientY-25)+'px)';
        fan.style.transform += 'translateX('+(ev.clientX-25)+'px)';
    },false);
  }

  submitdata(){

    this.http.post('http://192.168.1.65:7000/users/forgotPassword',this.forgetpass.value)


    .subscribe((result)=>{

      console.warn("result",result);
      this.forgetpass.reset();
      this.data = result;
      alert(this.data.message);
      this.Router.navigate(['/login'])

    },(error)=>{
      console.log(error.error.message);
      alert(error.error.message)
      this.error= error.error.message;
    }
    )
  }
}
