import { Component, OnInit } from '@angular/core';
import { SiteSelectBoxComponent } from './Components/site-select-box/site-select-box.component';
import { FilteringComponent } from './Components/filtering/filtering.component';
import { ProductTableComponent } from './Components/product-table/product-table.component';
import { colData } from './core/interface/colData';
import { PaginatorModule } from 'primeng/paginator';
import { MenuItem } from 'primeng/api';
import { ModelComponent } from './Components/model/model.component';

@Component({
  selector: 'app-droppShipping',
  standalone: true,
  imports: [SiteSelectBoxComponent,FilteringComponent,ProductTableComponent,PaginatorModule,ModelComponent],
  templateUrl: './dropp-shipping.component.html',
  styleUrls: [
    './dropp-shipping.component.scss',
    '../styles/styles.scss'
  ]
})
export class DroppShippingComponent implements OnInit {
  products= [
    { productName: {image:'',category:'ملايس',name:'تيشيرت بناتي برسومات بارزة'}, brand: 'Adidas', size: ['xxl','xl'], color: ['red','green'],price:'9$-10$' },
    { productName: {image:'',category:'ملايس',name:'تيشيرت بناتي برسومات بارزة'}, brand: 'Adidas', size: ['xxl','xl'], color: ['red','green'],price:'9$-10$' },
    { productName: {image:'',category:'ملايس',name:'تيشيرت بناتي برسومات بارزة'}, brand: 'Adidas', size: ['xxl','xl'], color: ['red','green'],price:'9$-10$' },
    { productName: {image:'',category:'ملايس',name:'  برسومات بارزة'}, brand: 'Adidas', size: ['xxl','xl'], color: ['red','green'],price:'9$-10$' },
  ];
  colData:colData[]=[]
  gridData:any;
  first=0
  rows=10
  Tabitems: MenuItem[] =[
    { label: 'المتغيرات' },
    { label: 'الصور / الفيديو' },
    { label: 'الوصف' },
];
  showModel: boolean = false;


  constructor(){}
  ngOnInit(): void {
    this.setColData();
    this.setGridData()

  }
  
  setColData(){
    this.colData=[
      {field:'productName',header:'اسم المنتج',key:'productInfo'},
      {field:'brand',header:'البراند',key:''},
      {field:'size',header:'المقاسات',key:'JustArray'},
      {field:'color',header:'اللون',key:'JustArray'},
      {field:'price',header:'السعر',key:''},
      ]
  }
  setGridData(){
    this.gridData=this.products.map((product)=>{
      return {
        productName:product.productName,
        brand:product.brand,
        size:product.size,
        color:product.color,
        price:product.price
      }
    })
    
}

    openModel(data:any){
      this.showModel = true;
    }

}