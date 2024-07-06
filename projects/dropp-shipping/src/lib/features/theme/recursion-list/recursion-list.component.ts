import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CategoryResponse } from '../../../domain/entites/model/getCategories.model';
import { CategoryViewModel } from '../../../domain/entites/viewModel/category.viewModel';
import { ScrollerModule } from 'primeng/scroller';

interface selectedCategroy {
  listNumber: string;
  list: CategoryResponse[];
}

@Component({
  selector: 'app-recursion-list',
  standalone: true,
  imports: [ScrollerModule],
  templateUrl: './recursion-list.component.html',
  styleUrl: './recursion-list.component.scss',
})
export class RecursionListComponent implements OnChanges {
  @Input() categories: CategoryResponse[] = [];
  @Output() chosenCategory = new EventEmitter<CategoryResponse>();
  categoryViewModel!: CategoryViewModel;
  categoryObject!: selectedCategroy;
  categorySelected!: selectedCategroy;

  ngOnChanges() {
    if (this.categories.length) {
      this.categoryViewModel = new CategoryViewModel(this.categories);
      this.categoryObject = this.categoryViewModel.getCategoryData();
    }
  }
  handleSelectedCategory(category: any) {
    if (category.hasOwnProperty('categoryFirstList')) {
      if (category.categoryFirstList.length) {
        this.categorySelected = {
          list: category.categoryFirstList ,
          listNumber: 'inital',
        };
        return;
      }
      this.sendCategory(category);
    } else if (category.hasOwnProperty('categorySecondList')) {
      if (category.categorySecondList.length) {
        this.categorySelected = {
          list: category.categorySecondList,
          listNumber: 'first',
        };
        return;
      }
      this.sendCategory(category);
    }
    this.sendCategory(category);
  }
 

  sendCategory(category: CategoryResponse) {
    this.chosenCategory.emit(category);
  }
}
