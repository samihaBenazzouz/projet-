import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movies.service';
import { AddMovieComponent } from './add-movie/add-movie.component';

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
  isConnectionAvailableM: boolean = navigator.onLine; 
  isserverAvailable:boolean= true;
  mySubscription:any;
  constructor(private movie :MovieService,private router: Router, private dialog:MatDialog) {
    // /*verif connexion*
    window.addEventListener('online', () => {
      this.isConnectionAvailableM = true
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
           // Trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
        }
      }); 
  });

    window.addEventListener('offline', () => {
      this.isConnectionAvailableM = false
 
  });

   }

  ngOnInit(): void {
    /*list of movie*/
    this.loading=true
    this.movie.listemovies(this.title,this.year).subscribe((res)=>{
     this.listeFilms=res 
     console.log(this.listeFilms);
     
     this.loading=false
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
    this.loading=true
    this.movie.listemovies(this.title,this.year).subscribe((res)=>{
     this.listeFilms=res 
     
     
     console.log(this.listeFilms);
     
     this.loading=false
    })
  
  }
  Add(){
    const dialogConfig= new MatDialogConfig;
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="650px";
    // dialogConfig.height="360px";
    
  const diag=  this.dialog.open(AddMovieComponent,dialogConfig);
  
    diag.afterClosed().subscribe(item => {
   
       if(item==1){
      
         this.ngOnInit();
      }
    
    })
  }
  OpenMedia(){}
}
