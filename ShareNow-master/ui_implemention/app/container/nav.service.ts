import {EventEmitter} from 'angular2/core';
export class NavService {
  navchange: EventEmitter<string> = new EventEmitter();
  constructor() {}
  emitNavChangeEvent(name) {
    this.navchange.emit(name);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }
}