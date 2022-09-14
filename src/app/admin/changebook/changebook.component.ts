import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormGroup, FormControl,Validators } from '@angular/forms';
import { EditbookComponent } from '../editbook/editbook.component';
import { BooksservicesService } from 'src/app/service/booksservices.service';



@Component({
  selector: 'app-changebook',
  templateUrl: './changebook.component.html',
  styleUrls: ['./changebook.component.css']

})
export class ChangebookComponent implements OnInit {
  updatebook:any;
  defaultevalue:any;
  upbook:any;
  data3:any;
  data:any;
  books:any;
  new:any;

  constructor(private http:HttpClient, private router:Router, private edit:BooksservicesService) { }
  apifun(){
    this.http.get('http://192.168.1.65:7000/showbook')
    .subscribe((result)=> {
      this.data = result;
      this.books = this.edit.change;
      console.log(this.data);
      this.setvalue();

    })
}
setvalue(){
  this.defaultevalue={
     "bookid":this.books.bookid,
     "title":this.books.title,
     "author":this.books.author,
     "price":this.books.price,
     "language":this.books.language,
     "category":this.books.category,
     "description":this.books.description
   }
   this.updatebook.setValue(this.defaultevalue);

 }

  ngOnInit(): void {
    this.apifun();
    this.updatebook = new FormGroup({
      "bookid":new FormControl(null,[Validators.required]),
      "title":new FormControl(null,[Validators.required]),
      "author":new FormControl(null,[Validators.required]),
      "price":new FormControl(null,[Validators.required,Validators.email]),
      "language":new FormControl(null,[Validators.required]),
      "category":new FormControl(null,[Validators.required]),
      "description":new FormControl(null,[Validators.required])

    })
  }
  update(updatebook:any){
    console.log(updatebook)

    // this.http.post('http://192.168.1.65:7000/admin/allbook/updateBookdata', updatebook.value)
    // .subscribe((result)=>{
    //   this.ngOnInit();
    // })
    this.updatebook.value._id =updatebook;
    console.log("hello");
    this.http.post('http://192.168.1.65:7000/admin/allbook/updateBookdata',this.updatebook.value)
    .subscribe((result)=>{
      console.log(this.updatebook.value);
      console.warn("result",result);
      this.upbook=result;
      alert(this.upbook.message)
      console.log(this.upbook);
      this.router.navigate(['/editbook']);
      if(this.updatebook.valid){

        alert(this.upbook.message);
      }


    }
    )

  }
  get bookid() { return this.updatebook.get('bookid' ); }
  get title() { return this.updatebook.get('title'); }
  get author() { return this.updatebook.get('author'); }
  get price() { return this.updatebook.get('price'); }
  get language() { return this.updatebook.get('language'); }
  get category() { return this.updatebook.get('category'); }
  get description() { return this.updatebook.get('description'); }
}
