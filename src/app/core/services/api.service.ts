import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {
  EnvironmentConfig,
  ENV_CONFIG,
} from '../http/interfaces/environment-config.interface';

@Injectable()
export class ApiService {
  public baseUrl: string;
  constructor(
    @Inject(ENV_CONFIG) private config: EnvironmentConfig,
    private http: HttpClient
  ) {
    this.baseUrl = `${this.config.environment.baseUrl}`;
  }

  post<T>(
    path: string,
    body: any,
    header?: { [key: string]: string }
  ): Observable<any> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, body, {
      headers: header,
    });
  }

  get<T>(path: string, params?: { [key: string]: string }): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, {
      params: new HttpParams({ fromObject: params }),
    });
  }
}
