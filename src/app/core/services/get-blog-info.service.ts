import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetBlogInfoService {

  constructor(private http: HttpClient) { }

  public getBlogList(page: number = 1): Observable<any> {
    return this.http.get(`http://xun.com:3003/blog/list/10/${page}`);
      // .catch(err => Observable.throw(err || 'server error'));
  }

  public getBlogItem(id: number): Observable<any> {
    return this.http.get(`url?id=${id}`);
      // .catch(err => Observable.throw(err || 'server error'));
  }
}
