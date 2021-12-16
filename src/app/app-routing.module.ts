import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayListComponent } from './play-list/play-list/play-list.component';

const routes: Routes = [
  
  
    {path:'liste', loadChildren: () => import('../app/play-list/play-list.module').then(m => m.PlayListModule )},  
   
  
    { path: '', redirectTo: 'liste', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
