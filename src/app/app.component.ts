import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ai-chatbot';
  links = [
    {path:'/home',label:'Home',active:'button-active'},
    {path:'/chat',label:'Chat',active:'button-active'},
    {path:'/signin',label:'SignIn',active:'button-active'}


  ]
}
