import { PaginatorModule } from 'primeng/paginator';
import { FilteringComponent } from './features/Components/filtering/filtering.component';
import { ProductTableComponent } from './features/Components/product-table/product-table.component';
import { SiteSelectBoxComponent } from './features/Components/site-select-box/site-select-box.component';
import { Component, OnInit } from '@angular/core';
import { ModelComponent } from './features/Components/model/model.component';
import { MenuItem } from 'primeng/api';
import { colData } from './domain/entites/model/colData.model';
import { colDataViewModel } from './domain/entites/viewModel/colData.viewModel';

@Component({
  selector: 'app-droppShipping',
  standalone: true,
  imports: [SiteSelectBoxComponent,FilteringComponent,ProductTableComponent,PaginatorModule,ModelComponent],
  templateUrl: './dropp-shipping.component.html',
  styleUrls: [
    './dropp-shipping.component.scss',
    './styles.scss'
  ]
})
export class DroppShippingComponent implements OnInit {
  products= [
    { id:2,productName: {image:'',category:'ملايس',name:'تيشيرت بناتي برسومات بارزة'}, brand: 'Adidas', size: ['xxl','xl'], color: ['red','green'],price:'9$-10$' },
    { id:3,productName: {image:'',category:'ملايس',name:'تيشيرت بناتي برسومات بارزة'}, brand: 'Adidas', size: ['xxl','xl'], color: ['red','green'],price:'9$-10$' },
    { id:4, productName: {image:'',category:'ملايس',name:'تيشيرت بناتي برسومات بارزة'}, brand: 'Adidas', size: ['xxl','xl'], color: ['red','green'],price:'9$-10$' },
    { id:5,productName: {image:'',category:'ملايس',name:'  برسومات بارزة'}, brand: 'Adidas', size: ['xxl','xl'], color: ['red','green'],price:'9$-10$' },
  ];
  colData:colData[]=[
    {field:'productName',header:'اسم المنتج',key:'productInfo'},
    {field:'brand',header:'البراند',key:''},
    {field:'size',header:'المقاسات',key:'JustArray'},
    {field:'color',header:'اللون',key:'JustArray'},
    {field:'price',header:'السعر',key:''},
    ]
  colDataViewModel!:colDataViewModel


  gridData:any;
  first=0
  rows=10
  Tabitems: MenuItem[] =[
    { label: 'المتغيرات' },
    { label: 'الصور / الفيديو' },
    { label: 'الوصف' },
];
  showModel: boolean = false;


  constructor(){
      this.colDataViewModel=new  colDataViewModel(this.colData)
  }
  ngOnInit(): void {
    this.setGridData()
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