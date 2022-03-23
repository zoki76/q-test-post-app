import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterService } from '../../services/filter.service';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let mockFilterService: FilterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FontAwesomeModule],
      declarations: [FilterComponent],
      providers: [
        {
          provide: FilterService,
          useValue: jasmine.createSpyObj('FilterService', ['setFilter']),
        },
      ],
    }).compileComponents();
    mockFilterService = TestBed.inject(FilterService);
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prepare and set filter after filter form control value changed', fakeAsync(() => {
    component.filterForm.get('filterValue')?.setValue('test');
    component.filterForm.get('filterValue')?.updateValueAndValidity();
    tick(300);
    expect(mockFilterService.setFilter).toHaveBeenCalledOnceWith({
      key: 'name',
      value: 'test',
    });
  }));
});
