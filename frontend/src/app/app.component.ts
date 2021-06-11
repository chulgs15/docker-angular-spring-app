import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

interface message {
  message: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http:HttpClient) {
  }

  public clickWorld(): void {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    console.log("hello world");
    this.http.get<message>("/api/hello")
      .subscribe(
        (data:message) => {
          console.log(data);
          alert(data.message);
        }, error => {
          console.error(error);
        }, () => {
          console.log("api/hello complete");
        }
      );
  }
}
