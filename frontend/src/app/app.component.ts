import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http: HttpClient) {

  }

  public clickButton(): void {
    this.http.get<String>("localhost:8080/api/hello")
      .subscribe(
        value => {
          alert(value);
        }
      );
  }
}
