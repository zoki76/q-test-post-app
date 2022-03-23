import { Pipe, PipeTransform } from '@angular/core';
import { KeyValueModel } from '../models/key-item.model';

@Pipe({
  name: 'gridFilter',
})
export class GridFilterPipe implements PipeTransform {
  transform(items: any[], arg: KeyValueModel): any[] {
    if (arg?.value) {
      return items.filter((item) =>
        item[arg.key].toLowerCase().includes(arg.value.toLowerCase())
      );
    }
    return items;
  }
}
