import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket = null;
  user = null;
  constructor() { 
   
  }
  initSocket(){
    this.socket = io('http://localhost:3000')
  }
  getMsg(){
    return new Observable((subject)=>{
      this.socket.on('onServerMsg',(msg)=>{
        subject.next(msg);
      })
    });
  }
  sendMsg(text){
    const msg = { user: this.user, text }
    this.socket.emit('onClientMsg',msg) 
  }
}
