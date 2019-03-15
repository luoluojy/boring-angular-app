import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { CustomMaterialModule } from '../custom-material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule, CustomMaterialModule]
})
export class AuthModule {
  constructor(public store: Store) {
    const valid = this.store.selectSnapshot(state => state.app.valid);
    if (valid) {
      this.store.dispatch(new Navigate(['/admin']));
    }
  }
}
