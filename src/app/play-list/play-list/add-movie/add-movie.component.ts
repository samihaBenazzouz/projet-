import { Component,  Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
 watchList:any=[]
 newWatchlist:any=[]
 isConnectionAvailable: boolean = navigator.onLine;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private dialog:MatDialog,private dialogRef: MatDialogRef<AddMovieComponent>) {
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
    if (localStorage.getItem('monObjet')){
      console.log('yes');

      this.newWatchlist = JSON.parse(localStorage.getItem('monObjet')  ?? '{}');
    }else{
      this.newWatchlist = []
    }

    this.newWatchlist.push(this.data);
    localStorage.setItem('monObjet', JSON.stringify(this.newWatchlist));



   
    // this.newWatchlis.push(JSON.stringify(localStorage.getItem('monObjet')))
    // this.newWatchlis.push(JSON.stringify(this.data))
    // localStorage.setItem('monObjet',this.newWatchlis);

  //   Récupération de l'objet
  //  let vr= localStorage.getItem('monObjet');
   
   
    
    
    //Récupération de l'objet
    // this.data = JSON.parse(localStorage.getItem('monObjet'));

    this.dialogRef.close("1")
   

  }
}
