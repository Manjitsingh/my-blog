import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { ContactDetailsService } from './contact-details.service'


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddComponent,
    HeaderNavigationComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ContactDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
