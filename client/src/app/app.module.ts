import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//added these two for http.service
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EdituserComponent } from './edituser/edituser.component';
@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    HomepageComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [HttpService], //and that
  bootstrap: [AppComponent]
})
export class AppModule { }
