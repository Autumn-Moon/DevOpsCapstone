import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashContentRoutingModule } from './dashcontent-routing.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DashContentRoutingModule
    
  ],
  providers: [],
  bootstrap: []
})
export class DashContentModule { }
