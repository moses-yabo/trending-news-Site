import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
newsData:any[]=[];
  constructor(private newsService:NewsService) { }

 async ngOnInit() {
    this.newsService.getNews().subscribe((v)=>{
      this.newsData = v.articles;
    })
  }

}
