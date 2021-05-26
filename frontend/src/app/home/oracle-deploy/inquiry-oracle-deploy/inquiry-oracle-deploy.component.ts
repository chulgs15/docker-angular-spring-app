import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inquiry-oracle-deploy',
  templateUrl: './inquiry-oracle-deploy.component.html',
  styleUrls: ['./inquiry-oracle-deploy.component.css'],
  animations: [
    trigger('inquiryOracleDeployEnterLeaveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class InquiryOracleDeployComponent implements OnInit {
  // 화면 호출 여부
  isShown: boolean = false;

  // Source 리스트 확인.
  step: number;

  // form Control
  DistNumInput = new FormControl('3');

  constructor() {}

  ngOnInit(): void {}

  public show(): void {
    this.isShown = true;
  }

  setStep(index: number) {
    this.step = index;
    this.DistNumInput.setErrors({ notUnique: true });
    this.DistNumInput.markAsTouched();
    console.log(this.DistNumInput);
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
