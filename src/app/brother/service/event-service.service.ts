import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventServiceService {
  public testArray:Subject<string> = new Subject<string>();
  
  constructor() { }

}
