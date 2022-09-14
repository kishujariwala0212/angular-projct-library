import { Component } from '@angular/core';
import { UserDataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
  users:any;
  constructor(private userData:UserDataService){
    this.userData.users().subscribe((data) =>{
      // console.log(data);
      this.users = data;
    })
  }
}
