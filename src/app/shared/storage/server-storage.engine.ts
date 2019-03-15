import { StorageEngine } from '@ngxs/storage-plugin';

export class ServerStorageEngine implements StorageEngine {

    private _data = {};

    public get length(): number {
        return Object.keys(this._data).length;
    }
    constructor() {
        this._data = {};
    }
    key(val) {
        return this._data[val];
    }

    setItem(id, val: string) {
        return (this._data[id] = String(val));
    }

    getItem(id) {
        return this._data.hasOwnProperty(id) ? this._data[id] : null;
    }

    removeItem(id) {
        delete this._data[id];
    }

    clear() {
        return (this._data = {});
    }
}
