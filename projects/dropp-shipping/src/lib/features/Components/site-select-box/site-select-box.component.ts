import { NgSelectModule } from '@ng-select/ng-select';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../../domain/services/Categories/categories.service';
import { CategoryResponse } from '../../../domain/entites/model/getCategories.model';
import { RecursionListComponent } from '../../theme/recursion-list/recursion-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-site-select-box',
  standalone: true,
  imports: [NgSelectModule,FormsModule,RecursionListComponent,NgIf],
  templateUrl: './site-select-box.component.html',
  styleUrls: ['./site-select-box.component.scss']
})
export class SiteSelectBoxComponent implements OnInit{
  constructor(private categoriesService:CategoriesService){}
  selectedCar!: number;
  categories:CategoryResponse[]=[];
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  openCategory:boolean=false
  ngOnInit(){
    this.getCategory()
  }
  getCategory(){
    this.categoriesService.getCategories().subscribe((category)=>{
      this.categories=category.data
      
    })
  }
  event(){
    this.openCategory=!this.openCategory
  }
  onCategoryChose(category:CategoryResponse){
    this.openCategory=false;
    console.log(category)
  }

}
