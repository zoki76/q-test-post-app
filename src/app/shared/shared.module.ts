import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { SideMenuComponent } from './layouts/side-menu/side-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from './services/filter.service';
import { GridFilterPipe } from './pipes/grid-filter.pipe';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    GridComponent,
    GridFilterPipe,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FontAwesomeModule,
    HeaderComponent,
    SideMenuComponent,
    FilterComponent,
    GridComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GridFilterPipe,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [FilterService],
    };
  }
}
