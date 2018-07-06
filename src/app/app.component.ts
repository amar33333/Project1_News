import { Component, OnInit } from '@angular/core';
import { NewsService } from './Services/news.service';
import { NewsObject } from './news-object'
import {SharedDataService} from './shared-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public newsData: NewsObject;
 
  public search_clicked:boolean;
  constructor(private _newsService: NewsService, private shared_data:SharedDataService) {
    this.newsData = new NewsObject();
    this.search_clicked=false;
  }
  ngOnInit() {
    this._newsService.getNewsData().subscribe(result => {
      console.log(result.articles);
      this.newsData = result.articles;
      console.log(result.totalResults);
    })

    console.log(this.newsData)

  }
  searchClicked()
  {
    
    console.log(this.shared_data.searchText)
    if(this.shared_data.searchText!=undefined && this.shared_data.searchText!=''){
    this.search_clicked =!this.search_clicked;
    }
  }

}
