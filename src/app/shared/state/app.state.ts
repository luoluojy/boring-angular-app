import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext, Store } from '@ngxs/store';
import * as moment from 'moment';
import { GetPlatform, ValidAdmin } from './app.actions';

export class AppStateModel {
  public platform: boolean;
  public valid: boolean;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    platform: true,
    valid: false
  }
})
export class AppState implements NgxsOnInit {
  constructor(private store: Store, @Inject(PLATFORM_ID) private platformId: Object) {}

  @Selector()
  static platform(state: AppStateModel) {
    return state.platform;
  }

  ngxsOnInit(ctx: StateContext<AppStateModel>) {
    ctx.dispatch(new GetPlatform());
    ctx.dispatch(new ValidAdmin());
  }

  @Action(GetPlatform)
  getPlatform(ctx: StateContext<AppStateModel>) {
    ctx.patchState({
      platform: isPlatformBrowser(this.platformId)
    });
  }

  @Action(ValidAdmin)
  validAdmin(ctx: StateContext<AppStateModel>) {
    const expiresAt = this.store.selectSnapshot(state => state.auth.expires_at), valid = moment().isBefore(new Date(expiresAt));
    ctx.patchState({
      valid: valid
    });
  }
}
