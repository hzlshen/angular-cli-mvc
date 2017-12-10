import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


@Injectable()
export class WebSocketService {

  ws:WebSocket;

  constructor() { }

  createObservableSocket(url:string):Observable<any>{
    this.ws = new WebSocket(url);
    // 返回一个可观测的流
    return new Observable(
      observable=>{
        this.ws.onmessage = (event)=>observable.next(event.data);
        this.ws.onerror = (event)=>observable.error(event);
        this.ws.onclose = (event)=>observable.complete();
      }
    );
  }

  sendMessage(message:string){
    this.ws.send(message);
  }

}
