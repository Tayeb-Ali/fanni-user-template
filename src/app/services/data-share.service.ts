import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }

  private dataSource = new BehaviorSubject("default message");
  serviceData = this.dataSource.asObservable();

  setData(data: any) {
    this.dataSource.next(data);
  }
//   shareDataSubject = new Subject<any>(); //Decalring new RxJs Subject
 
//   sendDataToOtherComponent(somedata){
//    this.shareDataSubject.next(somedata);
// }

}
