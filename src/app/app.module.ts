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
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {CardComponent} from './card.component'
// import {SearchComponent} from './'

import {
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxRippleModule,
 } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    AnimateComponent,
    CardComponent
    // SearchComponent
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
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,

  ],
  providers: [MDBBootstrapModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
