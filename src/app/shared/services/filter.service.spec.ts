import { TestBed } from '@angular/core/testing';

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

  it('should set and get filter', () => {
    const filter = { key: 'test', value: 'test' };
    service.setFilter(filter);
    service.getFilter().subscribe((f) => {
      expect(f).toEqual(filter);
    });
  });
});
