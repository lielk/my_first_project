import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import { AnimateComponent } from './animate.component';
import { HttpClientModule } from '@angular/common/http';
// import { BackgroundimageComponent } from './backgroundimage/backgroundimage.component';   

import {
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxRippleModule,
 } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    AnimateComponent
  ],
  imports: [
    HttpClientModule,
    MatIconModule,  
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxRippleModule,
    BrowserModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [MDBBootstrapModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
