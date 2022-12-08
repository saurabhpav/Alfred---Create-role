import { Component } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;

}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 'Billing and settlement'},
  {position: 2, name: 'Helium', weight: 'Query'},
  {position: 3, name: 'Lithium', weight:'Claim documents'},
  {position: 4, name: 'Beryllium', weight: 'Document Summary'},
  {position: 5, name: 'Boron', weight: 'Documents'},
  {position: 6, name: 'Carbon', weight: 'Profile'},
  {position: 7, name: 'Nitrogen', weight: 'Overview and decision'},
  {position: 8, name: 'Oxygen', weight: 'Claim Details'},
  {position: 9, name: 'Fluorine', weight: 'Dashboard'},
  {position: 10, name: 'Neon', weight: 'Claim' },
];






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'permit';


 firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

    displayedColumns: string[] = ['position', 'name', 'weight',];
  dataSource = ELEMENT_DATA;




}
