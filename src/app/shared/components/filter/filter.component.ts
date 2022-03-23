import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { icons } from '../../constants/icon-constants';
import { FilterService } from '../../services/filter.service';

@UntilDestroy()
@Component({
  selector: 'q-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  icons = icons;

  filterForm: FormGroup = this.formBuilder.group({
    filterValue: [''],
  });

  constructor(
    private filterService: FilterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filterForm
      .get('filterValue')
      ?.valueChanges.pipe(debounceTime(300), untilDestroyed(this))
      .subscribe((value) =>
        this.filterService.setFilter({ key: 'name', value })
      );
  }
}
