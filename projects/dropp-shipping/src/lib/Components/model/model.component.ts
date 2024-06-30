import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [DialogModule,TabMenuModule,NgSelectModule,FormsModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent implements OnInit  {

  visible=model<boolean>(false)
  @Input() items!:MenuItem[];
  activeItem:MenuItem|undefined;
  @Output() modelClose=new EventEmitter()


  ngOnInit(){
    if(this.items?.length){
      console.log(this.items)
      this.activeItem=this.items[1]

    }
  }

  onTabChange(tab:MenuItem){
    console.log(tab)
    this.activeItem=tab
  }
  // handle model Hide event 
  close(){
    this.visible.set(false)
    this.modelClose.next('')
  }
}
