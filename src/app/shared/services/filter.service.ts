import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { KeyValueModel } from '../models/key-item.model';

@Injectable()
export class FilterService {
  private filter$: Subject<KeyValueModel> = new Subject<KeyValueModel>();

  getFilter(): Observable<KeyValueModel> {
    return this.filter$.asObservable();
  }

  setFilter(filter: KeyValueModel): void {
    this.filter$.next(filter);
  }

  constructor() {}
}
