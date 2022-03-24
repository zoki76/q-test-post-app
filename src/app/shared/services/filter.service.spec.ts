import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService],
    });
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get filter', inject(
    [FilterService],
    (filterService: FilterService) => {
      const filter = { key: 'test', value: 'test' };
      spyOn(filterService, 'getFilter').and.returnValue(of(filter));
      filterService.setFilter(filter);
      filterService.getFilter().subscribe((f) => {
        expect(f).toEqual(filter);
      });
    }
  ));
});
