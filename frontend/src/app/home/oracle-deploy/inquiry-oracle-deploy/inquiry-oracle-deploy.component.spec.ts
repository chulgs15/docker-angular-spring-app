import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryOracleDeployComponent } from './inquiry-oracle-deploy.component';

describe('InquiryOracleDeployComponent', () => {
  let component: InquiryOracleDeployComponent;
  let fixture: ComponentFixture<InquiryOracleDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryOracleDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryOracleDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
