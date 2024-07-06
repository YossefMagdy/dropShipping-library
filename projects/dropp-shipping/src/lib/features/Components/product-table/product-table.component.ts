import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { colData } from '../../../domain/entites/model/colData.model';



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,NgFor,NgIf,FormsModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent {
  @Input() gridData:any
  @Input() colData:colData[]=[]
  @Input() data: any[] = [];
  @Input() modelButton:boolean = false;
  @Input() addCheckBox:boolean = false;
  @Input() styledClass:string = '';
  @Output() productEdit=new EventEmitter()


 selectedProducts!: any;

  constructor(private router: Router) {
  }


  ngOnInit(): void {
    
  }

  modelData(data:any){
    this.productEdit.next(data)
  }
  }
 

 





