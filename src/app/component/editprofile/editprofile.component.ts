import { FormGroup, FormControl,Validators, FormControlName } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { JwtService } from './../../jwt.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserDataService } from 'src/app/services/userdata.service';




@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  showp:any;
  data:any;
  pwd:any;
  user:any;
  error:any;
  udata:any;
  JWT:any;
  changepass:any;
  editdata:any;
  defaultevalue:any;
  userprofileimg:any;
  changephoto:any;
  img:any;


  constructor( private JwtService:JwtService,private userdata:UserDataService , private https:HttpClient, private Router:Router ,private cookie:CookieService ) {



   }
   apifun (){
    this.JWT= this.cookie.get('JWT');
    console.log(this.JWT);
    const header = new HttpHeaders({
      'Authorization':`Bearer ${this.JWT}`

    })
    console.log(header);
    this.https.get('http://192.168.1.65:7000/admin/profileOfUser',{headers:header})
    .subscribe((result)=> {
      this.user = result;
      console.log(this.user);
      this.setvalue();
    }
    )
   }
  setvalue(){
    console.log(this.user)
   this.defaultevalue={
      "firstname":this.user.firstname,
      "lastname":this.user.lastname,
      "username":this.user.username,
      "email":this.user.email,
      "phone":this.user.phone,
      // "image":`../../../assets/${this.user.userimg}`


    }
    this.editdata.setValue(this.defaultevalue);

  }


  ngOnInit(): void {
    this.apifun();
    this.editdata = new FormGroup({
      "firstname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "username":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "phone":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])






    }),

    this.changepass = new FormGroup ({
      "curpass":new FormControl(null,[Validators.required]),
      "newpass":new FormControl(null,[Validators.required]),
      "comfpass":new FormControl(null,[Validators.required])
    })
    this.changephoto = new FormGroup({
      "image":new FormControl(null)
    })


  }
  show(){
    this.showp=document.getElementById('curpass');

    if (this.showp.style.display === "none") {
      this.showp.style.display = "block";
      this.showp.style.margin="auto";
    } else {
      this.showp.style.display = "none";
    }
    this.showp=document.getElementById('newpass');

    if (this.showp.style.display === "none") {
      this.showp.style.display = "block";
      this.showp.style.margin="auto";
    } else {
      this.showp.style.display = "none";
    }
    this.showp=document.getElementById('comfpass');

    if (this.showp.style.display === "none") {
      this.showp.style.display = "block";
      this.showp.style.margin="auto";
    } else {
      this.showp.style.display = "none";
    }
    this.showp=document.getElementById('changebtn');

    if (this.showp.style.display === "none") {
      this.showp.style.display = "block";
      this.showp.style.margin="auto";
    } else {
      this.showp.style.display = "none";
    }

  }
  show2(){
    this.showp=document.getElementById('picc');

    if (this.showp.style.display === "none") {
      this.showp.style.display = "block";
      this.showp.style.margin="auto";
    } else {
      this.showp.style.display = "none";
    }
    this.showp=document.getElementById('picc2');

    if (this.showp.style.display === "none") {
      this.showp.style.display = "block";
      this.showp.style.margin="auto";
    } else {
      this.showp.style.display = "none";
    }
    this.showp=document.getElementById('note');

    if (this.showp.style.display === "none") {
      this.showp.style.display = "block";
      this.showp.style.margin="auto";
    } else {
      this.showp.style.display = "none";
    }
    this.showp=document.getElementById('changebtn2');

    if (this.showp.style.display === "none") {
      this.showp.style.display = "block";
      this.showp.style.margin="auto";
    } else {
      this.showp.style.display = "none";
    }
  }
  passwrd(){
    this.changepass.value.username = this.editdata.value.username;
    console.log(this.changepass.value)
    this.https.post('http://192.168.1.65:7000/users/changePassword',this.changepass.value)
    .subscribe((result)=> {
      this.pwd = result;
      console.log(this.pwd);

        alert(this.pwd.message);
        this.changepass.reset();




    }
    )

  }
  updatedat(e:any){

  }
  userimg(event:any){
    if(event.target.files.length >0){
      const file = event.target.files[0];
      this.userprofileimg=file;

    }
     this.img = new FormData()
     this.img.append('image',this.userprofileimg)
     this.img.append('firstname',this.editdata.value.firstname)
     this.img.append('lastname',this.editdata.value.lastname)
     this.img.append('username',this.editdata.value.username)
     this.img.append('email',this.editdata.value.email)
     this.img.append('phone',this.editdata.value.phone)
     this.img.append('_id',this.user._id)

  }
  submitdata(){
    console.log("hello");

    this.editdata.value._id = this.user._id;
      this.https.post('http://192.168.1.65:7000/users/updateUserData',this.editdata.value)
      .subscribe((result)=>{
        console.log(this.editdata.value._id);
        console.warn("result",result);
        this.data=result;
        console.log(this.data);
        this.userdata.user=this.data.user;
        if(this.editdata.valid){
          this.Router.navigate(['/userprofile']);
          alert(this.data.message);
        }
        // this.Router.navigate(['/userprofile']);


      }
      )
  }
  changepic(){
    this.changephoto.value._id = this.user._id;
    this.https.post('http://192.168.1.65:7000/users/updateUserData',this.img)
    .subscribe((result)=>{
      console.log(this.changephoto.value._id);
      console.warn("result",result);
      this.data=result;
      console.log(this.data);
      this.userdata.user=this.data.user;
      if(this.changephoto.valid){
        this.Router.navigate(['/userprofile']);
        alert(this.data.message);
      }
      // this.Router.navigate(['/userprofile']);


    }
    )

  }
  get firstname() { return this.editdata.get('firstname' ); }
  get lastname() { return this.editdata.get('lastname'); }
  get username() { return this.editdata.get('username'); }
  get email() { return this.editdata.get('email'); }
  get phone() { return this.editdata.get('phone'); }
  get image() { return this.changephoto.get('image'); }

  get curpass() { return this.editdata.get('curpass'); }
  get newpass() { return this.editdata.get('newpass'); }
  get comfpass() { return this.editdata.get('comfpass'); }


}
