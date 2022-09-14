import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-addbokk',
  templateUrl: './addbokk.component.html',
  styleUrls: ['./addbokk.component.css']
})
export class AddbokkComponent implements OnInit {
  addbook:any;
  bookimage:any;
  booktite:any;
  data:any;
  books:any;



  constructor(private http:HttpClient, private Router:Router) {
    this.addbook=new UntypedFormGroup({
      "bookid":new UntypedFormControl(null),
      "title":new UntypedFormControl(null),
      "language":new UntypedFormControl(null),
      "description":new UntypedFormControl(null),
      "author":new UntypedFormControl(null),
      "category":new UntypedFormControl(null),
      "price":new UntypedFormControl(null),
      "image":new UntypedFormControl(null)



    })
    }

  ngOnInit(): void {
    this.http.get('http://192.168.1.65:7000/showbook')
    .subscribe((result)=> {
      this.data = result;
      this.books = this.data.books;
      console.log(this.data);
    }

 )

  }
  
  bookImg(event:any){
    if(event.target.files.length >0){
      const file = event.target.files[0];
      this.bookimage=file;
    }

  }
  // bookTitle(event:any){
  //   if(event.target.files.length >0){
  //     const file = event.target.files[0];
  //     this.booktite=file;
  //   }


  // }
  registerBook(){
    console.log(this.addbook.value);
    const book = new FormData();
    book.append('bookid', this.addbook.value.bookid);
    book.append('title', this.addbook.value.title);
    book.append('description', this.addbook.value.description);
    book.append('author', this.addbook.value.author);
    book.append('language', this.addbook.value.language);

    book.append('category', this.addbook.value.category);
    book.append('price', this.addbook.value.price);
    book.append('image', this.bookimage);


    this.http.post("http://192.168.1.65:7000/",book)
    .subscribe((result)=>{
      console.warn(result);
      this.data=result;
      alert(this.data.status);
      this.addbook.reset();
    },(error)=>{
      alert(error.error.message);
      this.addbook.reset();
    }
    )

  }

}
