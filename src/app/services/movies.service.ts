import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
 
  
listemovies(){
  return this.http.get('');
}
ListeFavorie(){
    return this.http.get('');
}

}
