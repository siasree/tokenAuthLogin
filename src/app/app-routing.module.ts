import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialeventsComponent } from './specialevents/specialevents.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/events",
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  }, 
  {
    path: 'speacial', canActivate: [AuthGuard],
    component: SpecialeventsComponent,
  },
  {
    path: 'login', component: LoginComponent
  }, 
  {
    path: 'register', component: RegisterComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
