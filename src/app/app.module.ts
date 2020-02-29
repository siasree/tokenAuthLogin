import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialeventsComponent } from './specialevents/specialevents.component';
import { EventsComponent } from './events/events.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SpecialeventsComponent,
    EventsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,FormsModule
    // TokenInterceptorService,
    // EventService,
    // AuthService,
    // AuthGuard
  ],
  providers: [AuthGuard, AuthService, EventService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
