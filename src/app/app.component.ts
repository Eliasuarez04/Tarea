import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarea';
  posts: Post[] = [];

  
  
  constructor(private http: HttpClient) {}

  hacerSolicitud() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe((response) => {
      this.posts = response;
    });
  }
}