import { HttpParams } from '@angular/common/http';

export function addIfNotNull(params: HttpParams, key: string, value: any): HttpParams {
  if (value !== null && value !== undefined) {
    return params.set(key, value);
  }
  return params;
}
