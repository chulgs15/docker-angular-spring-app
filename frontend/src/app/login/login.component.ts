import { animate, style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { EbizError } from '../interface/ebiz-error';
import { EbizJwtToken } from '../interface/ebiz-jwt-token';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1000ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  // 변수
  isLogin = false;
  isShown = true;

  // id/password form control
  id = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router, private auth: AuthenticationService) {}

  // Procedure
  public getIdErrorMessage(): string {
    if (this.id.hasError('required')) {
      return 'you must enter ID';
    }
  }

  // Procedure
  public getPasswordErrorMessage(): string {
    if (this.id.hasError('required')) {
      return 'you must enter Password';
    }
  }

  public login(): void {
    // id/password 값의 존재여부를 확인한다.
    if (this.id.invalid || this.password.invalid) {
      return;
    }

    const id: string = this.id.value;
    const password: string = this.password.value;

    // Button Disable
    this.isLogin = true;

    // HTTP CLIENT 로 ID/PW 를 확인한다.
    this.auth
      .login(id, password)
      .pipe()
      .subscribe(
        (data: EbizJwtToken) => {
          // 맞으면 SessionStorage 에 token 을 저장한다.
          this.auth.setUserInfo(data.userName);

          // 홍페이지 이동.
          this.router.navigate(['home/oracle-deploy']);
        },
        (err: HttpErrorResponse) => {
          // 틀리면 메시지를 보여준다.
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', err.error.message);
          } else {
            console.error('An error occurred:', err.error);
            const ebizError: EbizError = err.error;
            Swal.fire({
              icon: 'error',
              text: ebizError.message,
            });
            this.isLogin = false;
          }
        },
        () => {
          this.isLogin = false;
        }
      );
  }

  // Event
  ngOnInit(): void {}
}
