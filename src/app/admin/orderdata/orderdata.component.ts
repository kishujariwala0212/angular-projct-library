import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-orderdata',
  templateUrl: './orderdata.component.html',
  styleUrls: ['./orderdata.component.css']
})
export class OrderdataComponent implements OnInit {
  data:any;
  message:any;
  man:any;
  userid:any;

  constructor(private http:HttpClient, private Router:Router) { }

  ngOnInit(): void  {
    this.http.get('http://192.168.1.65:7000/user/book/allOrder')
    .subscribe((result)=>{
      this.data = result;
      console.log(this.data);
    })
  }
  showMessage(element:any){
    this.message = document.getElementById('message');
    this.message.style.display='block';
    console.log(this.message)
    this.man= document.getElementById('abc');
    this.man.innerHTML=element;

  }
  close(){
    this.message = document.getElementById('message');
    this.message.style.display='none';
  }
  delet(element:any){
    // console.log(element)
    // this.userid ={_id:element}
    // this.http.post('http://192.168.1.65:7000/admin/contactus/deletemsg', this.userid)
    // .subscribe((result)=>{
    //   this.ngOnInit();
    // })

  }


}
