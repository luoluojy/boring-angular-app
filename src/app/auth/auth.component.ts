import { Component, OnInit } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { Logout } from './state/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public store: Store) {
    const valid = this.store.selectSnapshot(state => state.app.valid);
    if (valid) {
      this.store.dispatch(new Navigate(['/admin']));
    }
  }

  ngOnInit() { }

  logout() {
    this.store.dispatch(new Logout());
  }

}
