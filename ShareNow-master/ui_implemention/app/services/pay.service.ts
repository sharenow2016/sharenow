import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

export class group {
  constructor() {  let groupname:string,roommates:string[]}
}

@Injectable()
export class PayService {
  constructor(private _http: Http) { }

 public getgroupname() {
   return this._http.get('app/json/groupnames.json')
      .map((response: Response) => {
        let grpnm = response.json();
        return grpnm;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
