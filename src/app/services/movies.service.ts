import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  /*service url prefix*/
 baseUrl="https://omdbapi.com/"
  
serachFilm(title:string,year:string,type:string){
  
  return this.http.get(this.baseUrl+'/?apikey=4497e0e7&t='+title+'&y='+year+'&type='+type)
}
ListeFavorie(){
    return this.http.get('');
}

}
