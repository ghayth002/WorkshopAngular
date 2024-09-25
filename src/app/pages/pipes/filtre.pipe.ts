import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if ( !searchText) {
      return items; 
    }

    return items.filter(item => 
      item.title.toLowerCase().includes(searchText) 
    );

}

}
