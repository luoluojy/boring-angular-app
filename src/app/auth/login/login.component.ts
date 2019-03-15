import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Navigate } from "@ngxs/router-plugin";
import { Store } from "@ngxs/store";
import { AuthService } from "../auth.service";
import { Login } from "../state/auth.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    const val = this.form.value;
    this.store.dispatch(
      new Login({ username: val.email, password: val.password })
    );
  }
  routerToRegister() {
    this.store.dispatch(new Navigate(["/auth/register"]));
  }
  oauthLogin() {
    this.authService.oauthLogin();
    // timer(1000).subscribe(() => alert('OAuth授权登录中......'));
  }
}
