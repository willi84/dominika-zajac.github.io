import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'workshops', loadChildren: () => import('./workshops/workshops.module').then(m => m.WorkshopsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
