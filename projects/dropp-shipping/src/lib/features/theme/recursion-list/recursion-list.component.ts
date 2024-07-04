import { Component, Input, OnChanges } from '@angular/core';
import { CategoryResponse } from '../../../domain/entites/getCategories.model';
import { CategoryViewModel } from '../../../domain/services/Categories/category.viewModel';

  interface selectedCategroy{
    listNumber:string,
    list:CategoryResponse[]
  }

@Component({
  selector: 'app-recursion-list',
  standalone: true,
  imports: [],
  templateUrl: './recursion-list.component.html',
  styleUrl: './recursion-list.component.scss'
})
export class RecursionListComponent implements OnChanges{
@Input() categories:CategoryResponse[]=[]
categoryViewModel!:CategoryViewModel;
categoryObject!:selectedCategroy
categorySelected!:selectedCategroy


ngOnChanges(){
  if(this.categories.length){
    console.log('second')
    this.categoryViewModel=new CategoryViewModel(this.categories)
    this.categoryObject=this.categoryViewModel.getCategoryData()
    console.log(this.categoryObject)
  } 
}
  handleSelectedCategory(category:any){
  console.log(category)
  if(category.hasOwnProperty('categoryFirstList')){
    this.categorySelected={
      list:category.categoryFirstList,
      listNumber:'inital'
    }
  }else if(category.hasOwnProperty('categorySecondList')){
    this.categorySelected={
         list:category.categorySecondList,
        listNumber:'first' 
    }
  }else {
    console.log(category)
  }
  
  }
}
