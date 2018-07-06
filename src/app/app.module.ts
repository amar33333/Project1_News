import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NewsService} from './Services/news.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
