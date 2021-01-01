import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get(key: string): any {
    const value: any = localStorage.getItem(key) || JSON.stringify([]);
    return JSON.parse(value);
  }

  save(key: string, value: any): void {
    const strigifiedValue = value;
    const existingValues = strigifiedValue;
    localStorage.setItem(key, JSON.stringify(existingValues));
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }
}
