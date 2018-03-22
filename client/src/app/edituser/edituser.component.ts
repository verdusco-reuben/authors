import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  id: any;
  user: any;
  form : any;
  errors: any;

  constructor(
    private _route: ActivatedRoute,
    private _HttpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this.populateForm();
  }
  populateForm(){
    //get id from parameters
    this._route.params.subscribe(data => {
      console.log(data);
      this.id = data['id'];
    })
    //get user from Http.Service
    var observable = this._HttpService.getOneAuthor(this.id);
    observable.subscribe(data => {
      this.user = data;
    })
  }
  submitEdits(){
    console.log(this.user)
    var observable = this._HttpService.sendEdits(this.user)
    observable.subscribe(data => {
      if(data['error']){
        console.log(data['error']);
        this.errors = data['error'];
      }else{
      this._router.navigate(['/homepage']);
      }
    })
  }
}
