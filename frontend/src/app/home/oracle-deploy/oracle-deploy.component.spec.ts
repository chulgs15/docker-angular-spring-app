import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleDeployComponent } from './oracle-deploy.component';

describe('OracleDeployComponent', () => {
  let component: OracleDeployComponent;
  let fixture: ComponentFixture<OracleDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracleDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
