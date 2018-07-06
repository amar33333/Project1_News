import { Component,OnInit } from '@angular/core';
import {NewsService} from './Services/news.service';
import {NewsObject} from './news-object'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newsData:NewsObject;
 constructor(private _newsService:NewsService ){
this.newsData= new NewsObject();
 }
  ngOnInit() {
    this._newsService.getNewsData().subscribe(result=>
      { console.log(result.articles);
    this.newsData=result.articles;
    console.log(result.totalResults);
  })

    console.log(this.newsData)
    
  }
  
}
