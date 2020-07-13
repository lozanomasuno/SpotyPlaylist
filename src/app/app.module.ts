import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MousehoverComponent } from './mousehover/mousehover.component';

@NgModule({
  declarations: [AppComponent, AlbumesComponent, NavbarComponent, MousehoverComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
