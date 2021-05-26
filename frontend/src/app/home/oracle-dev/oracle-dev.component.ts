import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface fileElement {
  fileName: string;
  fileType: string;
  module: string;
}

interface Animal {
  name: string;
  sound: string;
}

const ELEMENT_DATA: fileElement[] = [
  { fileName: 'BTRF00001', fileType: 'Oracle Forms', module: 'BTR' },
  { fileName: 'BTRR00001', fileType: 'Report Designer', module: 'BTR' },
  { fileName: 'BTRR00001', fileType: 'Oracle Report', module: 'BTR' },
];

@Component({
  selector: 'app-oracle-dev',
  templateUrl: './oracle-dev.component.html',
  styleUrls: ['./oracle-dev.component.css'],
})
export class OracleDevComponent implements OnInit {
  displayedColumns: string[] = ['fileName', 'fileType', 'module', 'action'];
  dataSource = ELEMENT_DATA;

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
