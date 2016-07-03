import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { baseComponent } from './baseComponent';

@Injectable()
export class ComponentDataService {
  constructor(private _http: Http) { }

 public ComponentData(componentName?: string) {
   return this._http.get('app/json/'+componentName+'.json')
      .map((response: Response) => {
        let componentJson = <baseComponent>response.json();
        return componentJson;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
