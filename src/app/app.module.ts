import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NewsService} from './Services/news.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule 
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
