import {  Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { BooksservicesService } from 'src/app/service/booksservices.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtService } from 'src/app/jwt.service';

// import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  books:any;
  jwt:any;
  

  constructor(private book:BooksservicesService, private Route:Router ,private https:HttpClient, private JwtService:JwtService) {

    this.jwt=this.JwtService.jwt;
    console.log(this.jwt)
    // var headers = new  HttpHeaders().set('content-type','application/json');
    // headers.append("Authorization",`Bearer ${this.jwt}`);

    // this.https.get('http://192.168.1.65:7000/showbook',{headers:headers})
    // .subscribe((result)=> {
    //   this.data = result;
    //   this.books = this.data.books;
    //   console.log(this.data);


    // })
    const Httpheaders = new HttpHeaders({
      'Authorization':`Bearer ${this.jwt}`

    })
     this.https.get('http://192.168.1.65:7000/showbook', {headers:Httpheaders})
      .subscribe((result)=> {
      this.data = result;
      this.books = this.data.books;
      // console.log(this.data);
      })
      // if(this.data.lenght == 0){
      //   this.Route.navigate(['']);
      // }
   }

  bookdata:any;
  ngOnInit(): void {
    this.bookdata=this.book.books;
  }

}
