import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksservicesService } from 'src/app/service/booksservices.service';
import { HttpClient } from '@angular/common/http';

import { JwtService } from './../../jwt.service';

import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  bookid:any;
  // bookDetails:any;
  counterNumber = 1;
  bookdata:any;
  dataa:any;
  data:any;
  books:any;
  JWT:any;
  book:any;
  final:any;
  newbook :any;
  // addbook:any;


  constructor( private route:ActivatedRoute,private https:HttpClient,private cookie:CookieService,private Router:Router) {
    this.JWT=cookie.get('JWT');
    console.log(this.JWT);
    const header = new HttpHeaders({
      'Authorization':`Bearer ${this.JWT}`

    })
    console.log(header);
    this.https.get('http://192.168.1.65:7000/admin/profileOfUser',{headers:header})
    .subscribe((result)=> {
      this.dataa = result;
      console.log(this.dataa);

    }
    ,(error)=>{
      this.Router.navigate(['/login']);
      console.log(error);

    }
    )


   }

  ngOnInit(): void {
    // this.bookdata=this.book.books;
    this.bookid = this.route.snapshot.paramMap.get('bookid');
    // console.log(this.bookid,'bookid');
    this.newbook = {"bookid": this.bookid}
    console.log(this.newbook);
    this.https.post('http://192.168.1.65:7000/books/bookid',this.newbook)
    .subscribe((result)=> {
      this.data = result;
      // console.log(this.data);
      this.book = this.data[0];
      // console.log(this.book);
      console.log(this.book);

      // JSON.stringify(this.book);
    })




    // if(this.getproductId){
    //   this.books = this.book.books.filter((value)=>{
    //     return value.bookid == this.getproductId
    //   })
    // }
  }
  // ngOnInit(): void {
  //   // this.books=this.data.books;
  //   // this.addbook.value.bookid
  //   this.bookdata=this.book.books;
  //   this.getproductId = this.route.snapshot.paramMap.get('bookid');
  //   console.log(this.getproductId,'')
  //   if(this.bookdata.getproductId){
  //     this.bookdata = this.book.books.filter(()=>{
  //       return this.book.books == this.getproductId
  //     })
  //   }
  // }


  counter(val:any){
    if(val == '+'){
      this.counterNumber += 1;
    }
    if(val == '-'){
      if(this.counterNumber > 1){
        this.counterNumber -= 1;
      }
    }
  }
  addtocart(newbook:any){
    console.log(newbook)
    console.log(this.counterNumber)
    console.log(this.dataa._id)
    var obj=
      {
        id:this.dataa._id,
        bookid:newbook,
        quantity:this.counterNumber
      }
      console.log(obj);
      this.https.post('http://192.168.1.65:7000/user/book/addtocart',obj)


      .subscribe((result)=>{
        this.final = result;
        console.warn("result",result);

        alert(this.final.message);
      },(error)=>{
        console.log(error.error.message);
        alert(error.error.message)
      }
      )


  }

}
