import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http: HttpClient) {
  }

  clickHello() {
    this.http.get("/api/hello", {responseType: "text"})
      .subscribe(data => {
        console.log(data);
        alert(data);
      }, error => {
        console.error(error);
      });
  }
}
