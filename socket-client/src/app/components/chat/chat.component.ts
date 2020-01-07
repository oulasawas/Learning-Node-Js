import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { ChatService } from 'src/app/services/chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  //socket = null;
  msgList = [];
  constructor(private chat: ChatService) {  }

  ngOnInit() {
    this.chat.initSocket();
    this.chat.getMsg()
    .subscribe(msg =>{
      this.msgList.push(msg);
    })
    //this.socket = io('http://localhost:3000');
    //const socket = io('http://localhost:3000');
    //socket.emit('TEST');
    //socket.on('TEST SERVER',()=> console.log('TEST SERVER EVENT FIRED'));
    // this.socket.on('onServerMsg',(msg)=>{
    //   console.log(msg);
    // })
  }
  // handleClick(input){
  //   this.socket.emit('onClientMsg', input.value);
  // }

  handleSubmit(input){
    this.chat.sendMsg(input.value);
    input.value = '';
    return false;
  }
}
