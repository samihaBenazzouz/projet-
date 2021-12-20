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
   /* test the visualization of the spiner */
  loading :boolean= false;
  /* test display the filtering area */
  filter: boolean = false;
  /* static list of types*/
  types=[{designation:'Movie'},{designation:'Serie'}]
/* value of the type selected*/
  typ:string=''
  /* value of the year selected*/
  year:string=''
  /* static list of years*/
  years=[{designation:'2018'},{designation:'2017'},{designation:'2016'},{designation:'2015'}]
  /* value of the title selected*/
  title:string=''
/*list of films retrieved via the web service */
  listeFilms:any=[]
  listeWatch:any=[]

   /* test the connection */
  isConnectionAvailable: boolean = navigator.onLine; 
  mySubscription:any;

  constructor(private movie :MovieService,private router: Router, private dialog:MatDialog) {
     /*check the connection if the 
     connection is good the page will be displayed otherwise a message "check your connection" will be displayed*/
    window.addEventListener('online', () => {
      this.isConnectionAvailable = true
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
           // Trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
        }
      }); 
  });

    window.addEventListener('offline', () => {
      this.isConnectionAvailable = false
 
  });

   }

  ngOnInit(): void {
   
    this.loading=true
    /*consume the web service to display the whole list with an empty filter */
    this.movie.serachFilm(this.title,this.year,this.typ).subscribe((res)=>{
     this.listeFilms=res 
     this.loading=false
    })
   /*favorite list*/
    // this.movie.ListeFavorie().subscribe((res)=>{
    //   this.listeWatch=res 
    //  })
   
if (localStorage.getItem('monObjet') ){
  this.listeWatch=[JSON.parse(localStorage.getItem('monObjet') || '{}')]
}



// this.listeWatch=JSON.parse(localStorage.getItem("monObjet") || '{}'); 
     console.log('liste',this.listeWatch);
    //  const data =
     
     



  
   
  }





  /*function show click to display the filtering area*/
  show() {
    this.filter ? this.filter = false : this.filter = true;
   }
/* search function  consume the web service to display the list by the selected filter (title,year,type)*/
   rechercher() {
    this.loading=true
    this.movie.serachFilm(this.title,this.year,this.typ).subscribe((res)=>{
     this.listeFilms=res 
     this.loading=false
    })
  
  }
  add(liste=[]){
    const dialogConfig= new MatDialogConfig;
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="450px";
    dialogConfig.data=liste;
    
  const diag=  this.dialog.open(AddMovieComponent,dialogConfig);
  
    diag.afterClosed().subscribe(item => {
   
       if(item==1){
       
        // window.location.reload()
      }
  
    
    })
  }
  openMedia(){}
 
  
}
