import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : "", component : LoginComponent},
      {path : "login", component : LoginComponent},
      {path : "board", component: LoginComponent}
      ],
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
