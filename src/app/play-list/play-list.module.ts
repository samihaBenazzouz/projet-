import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListComponent } from './play-list/play-list.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    PlayListComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatListModule
  ]
})
export class PlayListModule { }
