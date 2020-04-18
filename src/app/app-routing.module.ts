import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { CocComponent } from './coc/coc.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workshops', loadChildren: () => import('./workshops/workshops.module').then(m => m.WorkshopsModule) },
  { path: 'faq', component: FaqComponent },
  { path: 'coc', component: CocComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
