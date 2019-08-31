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
import { TestcomponentComponent } from './testcomponent/testcomponent.component';


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
    TestcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataFetchService],
  bootstrap: [AppComponent]
})

export class AppModule { }
