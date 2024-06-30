import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { colData } from '../../core/interface/colData';



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,NgFor,NgIf],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent {
  @Input() gridData:any
  @Input() colData:colData[]=[]
  @Input() data: any[] = [];
  @Input() modelButton:boolean = false;
  @Output() productEdit=new EventEmitter()


  constructor(private router: Router) {
  }


  ngOnInit(): void {
    
  }

  modelData(data:any){
    this.productEdit.next(data)
  }
  }
 

 





