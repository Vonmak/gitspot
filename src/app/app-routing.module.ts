// import { Component } from '@angular/core'; 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { GitspotComponent } from './gitspot/gitspot.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'gitspot', component: GitspotComponent},
  {path: 'about', component: AboutComponent},

  { path: '', redirectTo:"/gitspot", pathMatch:"full"},//redirects to goals when user enters an empty path
  { path:'**', component: NotFoundComponent},//for error 404
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
