import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private http: HttpClient) {}

  public clickButton(): void {
    const options = {
      responseType: 'text' as const,
    };
    this.http.get('/api/hello', options).subscribe((value) => {
      console.log(value);
      alert(value);
    }, error => {
      console.log(error);
    });
  }
}
