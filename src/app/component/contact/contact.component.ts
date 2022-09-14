
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contactdata:any;
data:any;
  constructor( private http:HttpClient ) {
    this.contactdata = new UntypedFormGroup({
      "name" : new UntypedFormControl(null),
      "email" : new UntypedFormControl(null),
      "subject" : new UntypedFormControl(null),
      "message" : new UntypedFormControl(null)


    })
   }

  ngOnInit(): void {
  }
  querydata(){
    this.http.post('http://192.168.1.65:7000/admin/contactus',this.contactdata.value)


    .subscribe((result)=>{
      this.data =result;
      // console.warn("result",result);
      alert(this.data.message);
      this.contactdata.reset();
    },(error)=>{
      console.log(error);




    }
    )

  }
}
