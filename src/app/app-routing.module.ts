// import { Component } from '@angular/core'; 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
// import { GitspotComponent } from './gitspot/gitspot.component';
import { GitFormComponent } from './git-form/git-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 
  { path: '', redirectTo:"/git-form", pathMatch:"full"},//redirects to goals when user enters an empty path
  {path:'git-form', component:GitFormComponent},
  {path: 'about', component: AboutComponent},
  { path:'**', component: GitFormComponent},

  // { path:'**', component: NotFoundComponent},//for error 404
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
