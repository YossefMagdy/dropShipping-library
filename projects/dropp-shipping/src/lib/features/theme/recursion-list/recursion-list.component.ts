import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recursion-list',
  standalone: true,
  imports: [],
  templateUrl: './recursion-list.component.html',
  styleUrl: './recursion-list.component.scss'
})
export class RecursionListComponent {
@Input() categories:any[]=[]
}
