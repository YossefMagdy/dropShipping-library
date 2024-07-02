import { NgSelectModule } from '@ng-select/ng-select';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-site-select-box',
  standalone: true,
  imports: [NgSelectModule,FormsModule],
  templateUrl: './site-select-box.component.html',
  styleUrls: ['./site-select-box.component.scss']
})
export class SiteSelectBoxComponent {
  selectedCar!: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
}
