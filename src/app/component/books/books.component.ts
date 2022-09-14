import { Component, OnInit } from '@angular/core';
import { BooksservicesService } from 'src/app/service/booksservices.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/jwt.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  data:any;
  books:any;
  jwt :any;
  show = 6;
  name:any;
  title = 'Show More';
  filterItem:any;
  display:any = true;
  display2:any = false;
  filterData:any;
  constructor(private book:BooksservicesService, private https:HttpClient,private route:Router , private JwtService:JwtService) {
    this.jwt=this.JwtService.jwt;
    const Httpheaders = new HttpHeaders({
      'Authorization':`Bearer ${this.jwt}`

    })
    console.log(Httpheaders);
    this.https.get('http://192.168.1.65:7000/showbook',{headers:Httpheaders})
    .subscribe((result)=> {
      this.data = result;
      this.books = this.data.books;
      console.log(this.data);
    }
    ,(error)=>{
      this.route.navigate(['/login']);
      console.log(error);

    }
    )
  }
  bookdata:any;
  ngOnInit(): void {
    this.bookdata=this.book.books;
  }
  showmore(){

    console.log(this.bookdata.length);
    if(this.show >= this.bookdata.length ){
      this.title='Show More';
      this.show=this.show-3;


    }else{
      this.title='Show Less';
      this.show=this.show+3;
    }
  }
  filter(item:any){
    this.filterItem = item;
    this.display = false;
    this.display2 = true;
  }
  fun30(){

  }
  ser(){
    console.log(this.name);
    let obj ={"title":`${this.name}`}
    this.https.post('http://192.168.1.65:7000/user/book/findBook',obj)


    .subscribe((result)=>{
      console.warn("result",result);
      // alert(result);
      this.filterData = result;
    },(error)=>{
      console.log(error.error.message);
      // alert(error.error.message)
    }
    )
  }

}
