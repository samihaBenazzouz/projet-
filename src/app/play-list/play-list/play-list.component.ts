import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  /*variable declaration*/
  loading :boolean= false;
  filter: boolean = false;
  types=[{designation:'Movies'},{designation:'Series'}]
  typ:string=''
  year:string=''
  years=[{designation:'2018'},{designation:'2017'},{designation:'2016'},{designation:'2015'}]
  myControl = new FormControl();
  title:string=''
  listeFilms:any=[]
  listeFavorie:any=[]
  constructor(private movie :MovieService) { }

  ngOnInit(): void {
    /*list of movie*/
    this.movie.listemovies().subscribe((res)=>{
     this.listeFilms=res 
    })
   /*favorite list*/
    this.movie.ListeFavorie().subscribe((res)=>{
      this.listeFavorie=res 
     })
  }





  /*function open*/
  show() {
    this.filter ? this.filter = false : this.filter = true;
   }
/* search function */
   Rechercher() {
   
    
  
  }
}
