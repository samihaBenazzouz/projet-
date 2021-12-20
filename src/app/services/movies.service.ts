import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Media } from '../models/media';


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
GetByIdMedia(id:string){
  return this.http.get<Media>(this.baseUrl+'/?apikey=4497e0e7&i='+id)
}

}
