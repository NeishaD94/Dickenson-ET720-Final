import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotoryachtsComponent } from './motoryachts/motoryachts.component';
import { SportfishComponent } from './sportfish/sportfish.component';
import { ExperienceComponent } from './experience/experience.component';
import { VisitflushingComponent } from './visitflushing/visitflushing.component';

const appRoutes: Routes = [
  { path: 'motoryachts', component: MotoryachtsComponent},
  { path: '',
   redirectTo: '/motoryachts',
   pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MotoryachtsComponent,
    SportfishComponent,
    ExperienceComponent,
    VisitflushingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
