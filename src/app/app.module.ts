import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { FacebulousComponent } from './projects/project/facebulous/facebulous.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OvercdsComponent } from './projects/project/overcds/overcds.component';
import { HotelComponent } from './projects/project/hotel/hotel.component';
import { UsaComponent } from './projects/project/usa/usa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutmeComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    FacebulousComponent,
    OvercdsComponent,
    HotelComponent,
    UsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
