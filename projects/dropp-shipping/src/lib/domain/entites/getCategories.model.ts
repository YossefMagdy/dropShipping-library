interface Category {
    categoryId: string;
    categoryName: string;
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
    categorySecondList?: Category[];
  }
