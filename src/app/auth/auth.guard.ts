import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { AppState } from '../shared/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkValid(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkValid(url);
  }

  checkValid(url: string): boolean {
    const platform = this.store.selectSnapshot(AppState.platform);
    if (!platform) {
      return true;
    }
    const valid = this.store.selectSnapshot(state => state.app.valid);
    if (!valid) {
      this.store.dispatch(new Navigate(['/auth/login']));
    }

    return valid;
  }
}
