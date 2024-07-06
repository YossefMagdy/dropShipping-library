import { CategoryResponse } from "../model/getCategories.model";


export class CategoryViewModel{
    private category!:CategoryResponse[]
    constructor(categroy:CategoryResponse[]){
        this.category=categroy
    }

    getCategoryData():{
        listNumber:string,
        list:CategoryResponse[]
      }{
        if(this.category[0].hasOwnProperty('categoryFirstList')){
            return {
                listNumber:'inital',
                list:this.category
            }
        }
        else if(this.category[0].hasOwnProperty('categorySecondList')){
            return {
                listNumber:'first',
                list:this.category
            }
        }
        else {
            return {
                listNumber:'second',
                list:this.category
            }
        }
    }
}