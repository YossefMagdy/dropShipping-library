import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProductTableComponent } from '../product-table/product-table.component';
import { colData } from '../../core/interface/colData';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [DialogModule,TabMenuModule,NgSelectModule,FormsModule,NgStyle,ProductTableComponent],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent implements OnInit  {
  fontSize:number=14;
  colorPicker:string='#000';
  fontWeightBold:boolean=false;
  fontStyleItalic:boolean=false;
  textUnderLine:boolean=false;
  
  colData:colData[]=[]
  gridData:any;

  visible=model<boolean>(false)
  @Input() items!:MenuItem[];
  activeItem:MenuItem|undefined;
  @Output() modelClose=new EventEmitter()


  products=[
    { id:2,image:'', color:'red',size:'xxl',CJPRICE:50,delivryCost:50,dropShippingCost:50,price:50 },


  ]
  ngOnInit(){
    if(this.items?.length){
      this.activeItem=this.items[1]
    }
    this.setColData()
    this.setGridData()
  }

  setColData(){
    this.colData=[
      {field:'photo',header:'الصورة',key:'img'},
      {field:'color',header:'اللون',key:'inputText'},
      {field:'size',header:'المقاس',key:'inputText'},
      {field:'CJPRICE',header:'CJ PRICE',key:'inputNumber'},
      {field:'delivryCost',header:'مصاريف الشحن',key:'inputNumber'},
      {field:'dropShippingCost',header:'اجمالي مصاريف الدروب شبينج',key:'inputNumber'},
      {field:'price',header:'السعر',key:'inputNumber',headerType:'priceHeader',currency:'EGP'},

      ]
  }
  setGridData(){
    this.gridData=this.products.map((product)=>{
      return {
        photo:product.image,
        color:product.color,
        size:product.size,
        CJPRICE:product.CJPRICE,
        delivryCost:product.delivryCost,
        dropShippingCost:product.dropShippingCost,
        price:product.price

      }
    })
    
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
