import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyValueModel } from '../../models/key-item.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'q-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() gridConfig: { title: string; key: string }[];

  @Input() items: any[];

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  filter: KeyValueModel;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.getFilter().subscribe((f) => {
      return (this.filter = f);
    });
  }

  onRowClick(item: any) {
    this.rowClicked.emit(item);
  }
}
