import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  newbie: any;
  errors: any;
  angularform: any;
  constructor(private _httpService: HttpService, private _router : Router ) { }

  ngOnInit() {
    this.newbie = {"name": ""}
    this.angularform = new FormGroup({
      'name': new FormControl(this.newbie, [
      Validators.required,
      Validators.minLength(3)
    ])
    })
  }
  submitNewbie(){
    var observable = this._httpService.newGuy(this.newbie);
    observable.subscribe(data =>{
      if(data['error']){
        console.log(data['error']);
        this.errors = data['error'];
      }else{
        console.log(data);
        this._router.navigate(['/homepage']);
      }
    })
  }

}
