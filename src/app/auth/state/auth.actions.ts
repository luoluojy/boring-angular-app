import { AuthResult } from './auth.model';

export class Login {
  static type = '[Auth] Login';
  constructor(public user: { username: string, password: string }) { }
}
export class Logout {
  static readonly type = '[Auth] Logout';
}
export class LogoutSuccess {
  static readonly type = '[Auth] LogoutSuccess';
}

export class LoginSuccess {
  static readonly type = '[Auth] LoginSuccess';
  constructor(public authResult: AuthResult) { }
}
export class LoginFailed {
  static type = '[Auth] LoginFailed';
  constructor(public error: any) { }
}
export class LoginRedirect {
  static readonly type = '[Auth] LoginRedirect';
}
