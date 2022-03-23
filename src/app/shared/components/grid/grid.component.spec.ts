import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FilterService } from '../../services/filter.service';

import { GridFilterPipe } from '../../pipes/grid-filter.pipe';

import { GridComponent } from './grid.component';
import { of } from 'rxjs/internal/observable/of';
const gridItems = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@test.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@test.com',
  },
];

const gridConfig = [
  {
    title: 'Id',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Email',
    key: 'email',
  },
];
describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let mockFilterService: FilterService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent, GridFilterPipe],
      providers: [FilterService],
    }).compileComponents();
    mockFilterService = TestBed.inject(FilterService);
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    component.gridConfig = gridConfig;
    component.items = gridItems;
    fixture.detectChanges();

    spyOn(component.rowClicked, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have config and items', () => {
    expect(component.gridConfig).toEqual(gridConfig);
    expect(component.items).toEqual(gridItems);
  });

  it('should emit item result from method trigger', () => {
    component.onRowClick(gridItems[1]);
    expect(component.rowClicked.emit).toHaveBeenCalledWith(gridItems[1]);
  });

  it('should display results on grid UI', () => {
    const tableBodyEl = fixture.debugElement.query(By.css('tbody'));
    const bodyRows = tableBodyEl.queryAll(By.css('tr'));
    expect(bodyRows).toHaveSize(2);
  });

  it('should emit item result on row click', () => {
    const tableBodyEl = fixture.debugElement.query(By.css('tbody'));
    const bodyRows = tableBodyEl.queryAll(By.css('tr'));
    bodyRows[1].nativeElement.click();
    expect(component.rowClicked.emit).toHaveBeenCalledWith(gridItems[1]);
  });

  it('should emit item result on row click', fakeAsync(() => {
    spyOn(mockFilterService, 'getFilter').and.returnValues(
      of({ key: 'name', value: 'Jane' })
    );
    component.ngOnInit();
    expect(component.filter).toEqual({ key: 'name', value: 'Jane' });
    tick(300);
    fixture.detectChanges();
    const tableBodyEl = fixture.debugElement.query(By.css('tbody'));
    const bodyRows = tableBodyEl.queryAll(By.css('tr'));
    expect(bodyRows).toHaveSize(1);
  }));
});
