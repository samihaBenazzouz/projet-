import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-movie',
  templateUrl: './remove-movie.component.html',
  styleUrls: ['./remove-movie.component.css']
})
export class RemoveMovieComponent implements OnInit {
  watchList:any=[]
  newWatchlist:any=[]
  isConnectionAvailable: boolean = navigator.onLine;
  listeWatch: any[]= [];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private dialog:MatDialog,private dialogRef: MatDialogRef<RemoveMovieComponent>) {
    window.addEventListener('offline', () => {
      this.isConnectionAvailable = false
      this.dialogRef.close()
  });
   }

  ngOnInit(): void {
    console.log(this.data);
    
  }
  fermer(){
    this.dialogRef.close()
  }
  onSubmit(){
    if (localStorage.getItem('monObjet') ){
      this.listeWatch = JSON.parse(localStorage.getItem('monObjet') || '{}');
    }
    const index = this.listeWatch.indexOf(this.data?.imdbID)
    console.log(index);
    

    this.dialogRef.close("1")
   

  }
}
