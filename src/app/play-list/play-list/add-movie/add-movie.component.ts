import { Component,  Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
 watchList:any=[]
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private dialog:MatDialog,private dialogRef: MatDialogRef<AddMovieComponent>) { }

  ngOnInit(): void {
   
  }
  fermer(){
    this.dialogRef.close()
  }
  onSubmit(data=[]){
    this.watchList.push(this.data)
    this.dialogRef.close("1")
    console.log('listee',this.watchList);
  

  }
}
