import { Component } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {
  inputValue: number = 0;
  fromUnit: string = 'cm';
  toUnit: string = 'cm';
  convertedValue: number = 0;

  convert() {
    let valueInCm = 0;

    switch(this.fromUnit) {
      case 'cm':
        valueInCm = this.inputValue;
        break;
      case 'm':
        valueInCm = this.inputValue * 100;
        break;
      case 'km':
        valueInCm = this.inputValue * 100000;
        break;
    }

    switch(this.toUnit) {
      case 'cm':
        this.convertedValue = valueInCm;
        break;
      case 'm':
        this.convertedValue = valueInCm / 100;
        break;
      case 'km':
        this.convertedValue = valueInCm / 100000;
        break;
    }
  }
}
