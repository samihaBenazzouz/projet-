import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListComponent } from './play-list/play-list.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import { PlayListRouting } from './play-list.routing';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../services/movies.service';
import { MatDialogModule } from '@angular/material/dialog';
import { AddMovieComponent } from './play-list/add-movie/add-movie.component';
import { RemoveMovieComponent } from './play-list/remove-movie/remove-movie.component';
import { ViewMediaComponent } from './play-list/view-media/view-media.component';


@NgModule({
  declarations: [
    PlayListComponent,
    AddMovieComponent,
    RemoveMovieComponent,
    ViewMediaComponent,

  ],
  entryComponents:[AddMovieComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatListModule,
    PlayListRouting,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule
   

    
  ],
  providers: [ MovieService]
})
export class PlayListModule { }
