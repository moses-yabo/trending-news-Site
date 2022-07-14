import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
newsApi = environment.newsUrl;
newsArticle:any[];
weatherApi ;
  constructor(private _http:HttpClient) { }

  getNews():Observable<any>{
      return this._http.get(this.newsApi)


  }
}
