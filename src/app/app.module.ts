import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameDisplayComponent } from './name-display/name-display.component';

const appRoutes:Routes=[
  {
    path:"",component:NameDisplayComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NameDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
