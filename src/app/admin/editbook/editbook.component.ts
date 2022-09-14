

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormGroup, FormControl,Validators } from '@angular/forms';
import { BooksservicesService } from 'src/app/service/booksservices.service';







@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit  {
  data:any;
  books:any;
  bookidd:any;
  message:any;
  man:any;
  box:any;
  new:any;
  book:any;

  FormBuilder:any;
  updatebook:any;
  defaultevalue:any;
  upbook:any;
  data3:any;
  // new:any;




  constructor(private http:HttpClient, private Router:Router , private edit:BooksservicesService) {

    
  }




  ngOnInit(): void {

    this.http.get('http://192.168.1.65:7000/showbook')
    .subscribe((result)=> {
      this.data = result;
      this.books = this.data.books;
      console.log(this.data);
    })

}
delet(element:any){
  console.log(element)
  this.bookidd={bookidd:element}
  console.log(this.bookidd)
  this.http.post('http://192.168.1.65:7000/admin/allbook/deletebook', this.bookidd).subscribe((result)=>{
    this.ngOnInit();
  })
}

show(book:any){
 this.edit.change = book;
 console.log(this.edit.change)
}


}
