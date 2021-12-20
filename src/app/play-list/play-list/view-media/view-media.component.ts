import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Media } from 'src/app/models/media';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-view-media',
  templateUrl: './view-media.component.html',
  styleUrls: ['./view-media.component.css']
})
export class ViewMediaComponent implements OnInit {
  isConnectionAvailable: boolean = navigator.onLine;
/* imdbID*/
  id:string=''
/*Media model instance*/
  media = new Media
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private dialog:MatDialog,private dialogRef: MatDialogRef<ViewMediaComponent>,private mov:MovieService) {
    window.addEventListener('offline', () => {
      this.isConnectionAvailable = false
      this.dialogRef.close()
  });
   }

  ngOnInit(): void {
this.id=this.data.imdbID
// /*retrieve a media by its ID via the web service.*
this.mov.GetByIdMedia(this.id).subscribe((res:Media)=>{
  this.media.Title=res.Title
  this.media.Genre=res.Genre
  this.media.Language=res.Language
  this.media.Released=res.Released
  this.media.Writer=res.Writer
  this.media.Year=res.Year
  this.media.Country=res.Country
  this.media.Actors=res.Actors
})

  }
  /*close dialog box*/
  fermer(){
    this.dialogRef.close()
  }
}
