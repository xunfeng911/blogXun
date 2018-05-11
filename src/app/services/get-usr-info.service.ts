import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetInfoService {

  constructor(private http: HttpClient) { }

  public getUsrInfo(): Observable<any> {
    return this.http.get('../../api/info.json');
      // .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  public getResume(): Observable<any> {
    return this.http.get('../../api/Resume.json');
      // .catch((error: any) => Observable.throw(error || 'Server error'));
  }
  // public getBlogsList(): Observable<BlogCardData[]> {
  //   return this.http.get()
  // }
}
