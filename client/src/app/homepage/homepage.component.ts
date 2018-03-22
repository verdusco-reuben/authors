import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { EdituserComponent } from '../edituser/edituser.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  allusers: any;
  singleuser: any;
  constructor(private _HttpService: HttpService, private _router : Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    var observable = this._HttpService.getAllAuthors();
    observable.subscribe(data => {
      this.allusers = data;
    })
  }

  deleteMe(id){
    var observable = this._HttpService.kill(id);
    observable.subscribe(data=>{
      this.getAll();
    })

  }


}
