import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages:Message[]=[];
  value:string | undefined;

  constructor(public chatService:ChatService) { }

  ngOnInit(): void {
    this.chatService.conversation.subscribe((val)=>{
      this.messages = this.messages.concat(val);
    });
  
  }
  sendMessage(){
    this.chatService.getBotAnswer(this.value);
    this.value = ''
  }
}
