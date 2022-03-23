import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EnvironmentConfig,
  ENV_CONFIG,
} from './interfaces/environment-config.interface';
import { ApiService } from '@core/services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ApiService],
})
export class HttpModule {
  static forRoot(config: EnvironmentConfig): ModuleWithProviders<HttpModule> {
    return {
      ngModule: HttpModule,
      providers: [
        {
          provide: ENV_CONFIG,
          useValue: config,
        },
        ApiService,
      ],
    };
  }
}
