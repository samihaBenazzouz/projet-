import { Component,  Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  listeWatch:Array<any> =[]

 isConnectionAvailable: boolean = navigator.onLine;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private dialog:MatDialog,private dialogRef: MatDialogRef<AddMovieComponent>) {
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
  /* Add media to the listeWatch*/
  onSubmit(){
    if (localStorage.getItem('monObjet')){
     

      this.listeWatch = JSON.parse(localStorage.getItem('monObjet')  ?? '{}');
    }else{
      this.listeWatch = []
    }

    this.listeWatch.push(this.data);
    localStorage.setItem('monObjet', JSON.stringify(this.listeWatch))

    this.dialogRef.close("1")
   

  }
}
