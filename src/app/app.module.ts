import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatBfloginComponent } from './stat-bflogin/stat-bflogin.component';
import { FooterComponent } from './footer/footer.component';
import { DashcontentComponent } from './dashcontent/dashcontent.component';
import { ProjectlandingComponent } from './projectlanding/projectlanding.component';
import { SowheaderComponent } from './sowheader/sowheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { SowlogComponent } from './sowlog/sowlog.component';
import { DataFetchService } from './datafetch.service';
import { APP_BASE_HREF } from '@angular/common';
import { Testcomponent1Component } from './testcomponent1/testcomponent1.component';
import { Testcomponent2Component } from './testcomponent2/testcomponent2.component';
import { Testcomponent3Component } from './testcomponent3/testcomponent3.component';
import { Testcomponent4Component } from './testcomponent4/testcomponent4.component';
import { Testcomponent5Component } from './testcomponent5/testcomponent5.component';
import { Testcomponent6Component } from './testcomponent6/testcomponent6.component';
import { Testcomponent7Component } from './testcomponent7/testcomponent7.component';
import { Testcomponent8Component } from './testcomponent8/testcomponent8.component';
import { Testcomponent9Component } from './testcomponent9/testcomponent9.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatBfloginComponent,
    FooterComponent,
    DashcontentComponent,
    ProjectlandingComponent,
    SowheaderComponent,
    SidebarComponent,
    MilestoneComponent,
    SowlogComponent,
    Testcomponent1Component,
    Testcomponent2Component,
    Testcomponent3Component,
    Testcomponent4Component,
    Testcomponent5Component,
    Testcomponent6Component,
    Testcomponent7Component,
    Testcomponent8Component,
    Testcomponent9Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataFetchService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
