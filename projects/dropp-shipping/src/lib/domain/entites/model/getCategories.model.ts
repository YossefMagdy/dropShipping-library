interface Category {
    categoryId: string;
    categoryName: string;
  }
  
  interface CategoryFourth {
    categoryFourthId: string;
    categoryFourthName: string;
    categoryFourthList: Category[];
  }
  interface CategoryThird {
    categoryThirdId: string;
    categoryThirdName: string;
    categoryThirdList: Category[];
  }
  interface CategorySecond {
    categorySecondId: string;
    categorySecondName: string;
    categorySecondList: Category[];
  }
  
export  interface CategoryResponse {
    categoryFirstId: string;
    categoryFirstName: string;
    categoryFirstList: CategorySecond[];
    categorySecondId: string;
    categorySecondName: string;
    categorySecondList?: CategoryThird[];
    categoryThirdId: string;
    categoryThirdName: string;
    categoryThirdList?: CategoryFourth[];
    categoryName:string;
  }
