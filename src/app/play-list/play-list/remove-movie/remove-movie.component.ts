import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-movie',
  templateUrl: './remove-movie.component.html',
  styleUrls: ['./remove-movie.component.css']
})
export class RemoveMovieComponent implements OnInit {
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
    
   
  }
  /*close dialog box*/
  fermer(){
    this.dialogRef.close()
  }
  /* Remove media to the listeWatch*/
  onSubmit(){
    if (localStorage.getItem('monObjet') ){
      this.listeWatch = JSON.parse(localStorage.getItem('monObjet') || '{}');
    }
    
    const index = this.listeWatch.findIndex(x => x.imdbID == this.data?.imdbID);
   
    
    if (index !== -1) {

      this.listeWatch.splice(index,1);
      localStorage.setItem('monObjet', JSON.stringify(this.listeWatch));
  }   

    this.dialogRef.close("1")
   

  }
}
