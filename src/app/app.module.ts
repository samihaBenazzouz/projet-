import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { PlayListComponent } from './play-list/play-list/play-list.component';
import { PlayListRouting } from './play-list/play-list.routing';




@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
