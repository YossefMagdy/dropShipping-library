import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DroppShippingComponent } from '../../projects/dropp-shipping/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DroppShippingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dropShipping';
}
