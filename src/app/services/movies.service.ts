import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
 baseUrl="https://omdbapi.com/"
  
listemovies(title:string,year:string){
  // return this.http.get('https://omdbapi.com/?t='+title+'&y='+year+'&apikey=6195ff7e');
  return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=4497e0e7&t='+title+'&y='+year)
}
ListeFavorie(){
    return this.http.get('');
}

}
