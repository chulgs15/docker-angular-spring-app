import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

interface message {
  message: string
}

interface LoginDto{
  userName: string,
  password: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  passwordValue: string = "";
  idValue: string = "";

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

  isUserExist() {
    console.log(this.idValue, " ", this.passwordValue);
    let loginDto: LoginDto = {userName : this.idValue, password : this.passwordValue}
    this.http.post<message>("/api/user", loginDto)
      .subscribe(
        (data: message) => {
          console.log(data);
          alert(data.message);
        }, error => {
          console.error(error);
        }, () => {
          console.log("api/user complete");
        }
      );
  }
}
