import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:"",redirectTo: 'news',pathMatch: 'full'},
  {path:"developer", component:DeveloperComponent},
  {path:"news", component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
