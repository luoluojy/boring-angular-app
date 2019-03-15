import { Navigate } from '@ngxs/router-plugin';
import { Action, NgxsOnInit, Selector, State, StateContext, Store } from '@ngxs/store';
import { ValidAdmin } from 'src/app/shared/state/app.actions';
import { AuthService } from '../auth.service';
import { Login, LoginFailed, LoginRedirect, LoginSuccess, Logout, LogoutSuccess } from './auth.actions';
import { AuthStateModel } from './auth.model';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: undefined,
    username: undefined,
    expires_at: undefined
  }
})
export class AuthState implements NgxsOnInit {

  constructor(private store: Store, private auth: AuthService) { }

  /**
   * Selectors
   */

  @Selector()
  static username(state: AuthStateModel) {
    return state.username;
  }

  ngxsOnInit(ctx: StateContext<AuthStateModel>) { }

  /**
   * Commands
   */

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.auth
      .login(action.user.username, action.user.password)
      .subscribe(
        authResult => {
          ctx.dispatch(new LoginSuccess(authResult));
          ctx.dispatch(new ValidAdmin());
        },
        err => {
          ctx.dispatch(new LoginFailed(err));
        }
      );
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    return this.auth.logout().subscribe(() => {
      ctx.dispatch(new LogoutSuccess());
      ctx.dispatch(new ValidAdmin());
    });
  }

  /**
   * Events
   */

  @Action(LoginSuccess)
  onLoginSuccess(ctx: StateContext<AuthStateModel>) {
    ctx.dispatch(new Navigate(['/admin']));
  }

  @Action(LoginRedirect)
  onLoginRedirect(ctx: StateContext<AuthStateModel>) {
    ctx.dispatch(new Navigate(['/auth/login']));
  }

  @Action(LoginSuccess)
  setStateOnSuccess(ctx: StateContext<AuthStateModel>, event: LoginSuccess) {
    ctx.patchState({
      token: event.authResult.token,
      username: event.authResult.username,
      expires_at: event.authResult.expires_at
    });
  }

  @Action([LoginFailed, LogoutSuccess])
  setStateOnFailure(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({
      token: undefined,
      username: undefined,
      expires_at: undefined
    });
    ctx.dispatch(new LoginRedirect());
  }
}
