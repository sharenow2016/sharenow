import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

export class Vehicle {
  constructor(public id: number, public name: string, public side: string) { }
}

@Injectable()
export class CreateGroupService {
  constructor(private _http: Http) { }

 public getcreategroup(value?: string) {
   return this._http.get('app/json/creategroup.json')
      .map((response: Response) => {
        let vehicles = <Vehicle[]>response.json().data;
        console.log(response.json().data);
        if (!value) return vehicles;
        return vehicles.filter(v => v.name.toLowerCase().includes(value.toLowerCase()))
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  
  
  public testsample(){
    return this._http.get('app/json/creategroup.json').map((response: Response)=>{return response.json();});
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
