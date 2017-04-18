import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: any

  selectedCity: string;
  edit: any;

  cars: any;

  selectedCar: string = 'BMW';
  title = 'app works!';
  OPTIONS_BASIC: Array<any> = [
    { id: '0', label: 'Bangalore' },
    { id: '1', label: 'Mumbai' },
    { id: '2', label: 'chennai' },
    { id: '3', label: 'Kolkata' },
    { id: '4', label: 'Delhi' },
    { id: '5', label: 'Myshore' },
    { id: '6', label: 'Kharagpur' },
    { id: '7', label: 'Shirshi' },
    { id: '8', label: 'Pune' }
  ];
  constructor() {

  }
  selectedOption() {
    alert(this.edit);
  }
  onFreshData() {

  }

}
