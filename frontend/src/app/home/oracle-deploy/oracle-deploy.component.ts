import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { InquiryOracleDeployComponent } from './inquiry-oracle-deploy/inquiry-oracle-deploy.component';

export interface fileElement {
  requestId: number;
  requestor: string;
  creationDate: string;
  instance: string;
  g_toss_id: string;
  issue_id: number;
  status: string;
}

const ELEMENT_DATA: fileElement[] = [
  {
    requestId: 1,
    requestor: '신철구',
    creationDate: '2020-01-01 12:30:20',
    instance: 'ERPPROD',
    g_toss_id: 'CHM2007-I0001',
    issue_id: 4,
    status: 'NEW',
  },
  {
    requestId: 2,
    requestor: '융대호',
    creationDate: '2020-01-02 17:30:20',
    instance: 'ERPPROD',
    g_toss_id: 'CHM2007-I0002',
    issue_id: 6,
    status: 'Requested',
  },
  {
    requestId: 3,
    requestor: '김더오',
    creationDate: '2023-01-02 14:24:20',
    instance: 'MERPPROD',
    g_toss_id: 'CHM2007-I0004',
    issue_id: 78,
    status: 'Rejected',
  },
  {
    requestId: 4,
    requestor: '김키융',
    creationDate: '2013-01-02 14:24:20',
    instance: 'MERPPROD',
    g_toss_id: 'CHM2007-I0004',
    issue_id: 78,
    status: 'Approved',
  },
  {
    requestId: 5,
    requestor: '김키융',
    creationDate: '2013-01-02 14:24:20',
    instance: 'MERPPROD',
    g_toss_id: 'CHM2007-I0009',
    issue_id: 78,
    status: 'Deployed',
  },
];

@Component({
  selector: 'app-oracle-deploy',
  templateUrl: './oracle-deploy.component.html',
  styleUrls: ['./oracle-deploy.component.css'],
  animations: [
    trigger('OracleDeployEnterLeaveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class OracleDeployComponent implements OnInit {
  // 조회조건 Control
  requestIdControl = new FormControl();
  requestIdOptions: string[] = ['1', '2', '3'];
  filteredOptions: Observable<string[]>;

  // 화면 표시 여부
  isShown: boolean = true;

  // 보여줄 컬럼을 제어할 수 있다.
  displayedColumns: string[] = [
    'requestId',
    'requestor',
    'creationDate',
    'instance',
    'g_toss_id',
    'issue_id',
    'status',
  ];

  // 데이터 제어
  dataSource = ELEMENT_DATA;

  // 하위 Component 제어
  @ViewChild(InquiryOracleDeployComponent)
  inqOracleDeploy: InquiryOracleDeployComponent;

  // event
  ngOnInit() {
    this.filteredOptions = this.requestIdControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  // Function
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.requestIdOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  /**
   * hide
   */
  public hide(): void {
    this.isShown = false;
  }

  public openDeployeDetail(row: any): void {
    console.log('hello world');
    this.hide();
    this.inqOracleDeploy.show();
  }
}
