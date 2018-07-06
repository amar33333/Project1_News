import { Component, OnInit,Input } from '@angular/core';
import {SharedDataService} from './../shared-data.service'
import { NewsService } from './../Services/news.service';
import { NewsObject } from './../news-object'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Input() searchtext:string;
public searchData:NewsObject;
  constructor(private shared_data:SharedDataService,private _newsService:NewsService) { }

  ngOnInit() {
    console.log(this.shared_data.searchText);
    this._newsService.getsearchData(this.shared_data.searchText)
    .subscribe(result=>
      {
      this.searchData=result.articles;
    console.log(this.searchData)
  })

  }

}
