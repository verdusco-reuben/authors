import { Injectable } from '@angular/core';
//for our constructor to use. yay Dependency Injection!
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http : HttpClient) { }
  getAllAuthors(){
    return this._http.get('/all')
  }
  getOneAuthor(id){
    return this._http.get('/author/'+id)
  }
  sendEdits(user){
    console.log(user._id)
    return this._http.put('/author/'+user._id, user)
  }
  newGuy(user){
    console.log(user);
    return this._http.post('/author', user);
  }
  kill(id){
    return this._http.delete('/author/'+id);
  }
}
