import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '../auth/state';
import { Logout } from '../auth/state/auth.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isExpand = false;

  @Select(AuthState.username) username$: Observable<string>;

  constructor(public store: Store) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
