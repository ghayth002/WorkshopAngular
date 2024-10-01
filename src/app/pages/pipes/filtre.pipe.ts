import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

 
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }

}
