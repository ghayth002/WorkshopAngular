import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/categorie';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit{
  category: Category =new Category();
ngOnInit(): void {
this.category =new Category();

}
add(){
  console.log(this.category)
}



}


