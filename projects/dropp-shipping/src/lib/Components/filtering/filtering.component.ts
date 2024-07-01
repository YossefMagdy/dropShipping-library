import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-filtering',
  standalone: true,
  imports: [NgSelectModule,FormsModule,NgIf],
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss','../../../styles/styles.scss']
})
export class FilteringComponent {
  addMoreFilter:boolean=false
  selectedCar!: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
}
