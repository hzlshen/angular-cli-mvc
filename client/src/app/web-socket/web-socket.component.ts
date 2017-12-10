import { Component, OnInit } from '@angular/core';
import {WebSocketService} from "../shared/web-socket.service";

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  // 通过依赖注入 注入WebSocketService
  constructor(private wsService:WebSocketService) { }

  ngOnInit() {
    this.wsService.createObservableSocket("ws://localhost:8085")
      .subscribe(
        data =>console.log(data),
        err=>console.log(err),
        ()=>console.log("流已经结束")
      );
  }

  sendMessageToServer(){
    this.wsService.sendMessage("hello form client");
  }

}
