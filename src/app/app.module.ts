import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitFormComponent } from './git-form/git-form.component';
import { RepositoryComponent } from './repository/repository.component';
import { DaysPipe } from './pipe/days.pipe';
import { HoverDirective } from './directive/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    AboutComponent,
    NotFoundComponent,
    GitFormComponent,
    RepositoryComponent,
    DaysPipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
