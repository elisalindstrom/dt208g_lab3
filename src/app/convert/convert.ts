import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.scss',
})

export class Convert {
  value: number = 0;
  result: number = 0;
  unit: string = '';

  // Metoder
  meterToFeet(): void {
    if (this.value === 0) return;

    this.result = this.value * 3.2808399;
    this.unit = 'fot';
  }

  feetToMeter(): void {
    if (this.value === 0) return;

    this.result = this.value / 3.2808399;
    this.unit = 'meter';
  }

  celsiusToFahrenheit(): void {
    if (this.value === 0) return;

    this.result = (this.value * 9.0 / 5.0) + 32.0;
    this.unit = 'fahrenheit';
  }

  fahrenheitToCelsius(): void {
    if (this.value === 0) return;

    this.result = (this.value - 32.0) * 5.0 / 9.0;
    this.unit = 'celsius';
  }
}
