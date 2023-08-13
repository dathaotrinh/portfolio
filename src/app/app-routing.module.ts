import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { FacebulousComponent } from './projects/project/facebulous/facebulous.component';
import { OvercdsComponent } from './projects/project/overcds/overcds.component';
import { HotelComponent } from './projects/project/hotel/hotel.component';
import { UsaComponent } from './projects/project/usa/usa.component';
import { FindMyRoommateComponent } from './projects/project/findmyroommate/findmyroommate.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', children: [
    {path: 'home', component: HomeComponent},
    {path: 'about-me', component: AboutmeComponent},
    {path: 'projects', component: ProjectsComponent, children: [
      {path: 'project', component: ProjectComponent, children: [
        {path: 'findmyroommate', component: FindMyRoommateComponent},
        {path: 'facebulous', component: FacebulousComponent},
        {path: 'overcds', component: OvercdsComponent},
        {path: 'hotelbookingsystem', component: HotelComponent},
        {path: 'maptheusa', component: UsaComponent}
      ]}
    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
