import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleDevComponent } from './oracle-dev.component';

describe('OracleDevComponent', () => {
  let component: OracleDevComponent;
  let fixture: ComponentFixture<OracleDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracleDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
