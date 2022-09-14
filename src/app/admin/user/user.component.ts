import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://192.168.1.65:7000/admin/alluserdata')
    .subscribe((result)=>{
      this.data = result;
      console.log(this.data);
    })
                        
  }

}
