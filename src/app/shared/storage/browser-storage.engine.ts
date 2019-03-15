import { StorageEngine } from '@ngxs/storage-plugin';

export class BrowserStorageEngine implements StorageEngine {

  public get length(): number {
    return localStorage.length;
  }

  constructor() { }

  getItem(name): any {
    return localStorage.getItem(name);
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  removeItem(key: any): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  key(val: number): string {
    return localStorage.key(val);
  }
}
