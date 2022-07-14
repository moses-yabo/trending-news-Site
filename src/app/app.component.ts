import { Component } from '@angular/core';
import { NewsService } from './news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newMag';
  newsTrend:any[]=[];
  constructor(private newsApp:NewsService){

  }
  ngOnInit(){
this.newsApp.getNews().subscribe((v)=>{
this.newsTrend = v.articles;
console.log(this.newsTrend);


})
  }
}
