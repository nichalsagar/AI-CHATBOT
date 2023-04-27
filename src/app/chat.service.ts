import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message{
  constructor(public author:string,public content:string){

  }
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap:any ={
    "Hi":"Hello",
    "Who are you ?":"My name is Sagar",
    "What is Angular":"TypeScript-based free and open-source web application",
    "Default":"I can't understand. Can you please repeat other wise contact with Sagar Nichal"

  }
  getBotAnswer(msg:any){
    const userMessage = new Message('user',msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot',this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
  },1500)
}
getBotMessage(question:any){
  let answer = this.messageMap[question];
  return answer || this.messageMap['default']
}
}
                              