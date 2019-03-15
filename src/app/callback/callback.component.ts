import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import * as moment from 'moment';
import { LoginSuccess } from '../auth/state';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    // 保存url上的用户登录信息

    const authInfos = location.hash
      .substring(1)
      .split('&')
      .map(kvStr => {
        const kvObj = kvStr.split('=');
        return { [kvObj[0]]: kvObj[1] };
      });
    // ['auth.token', 'auth.expires_at', 'auth.username']
    console.log(authInfos);
    const date = new Date(),
      ms = date.getTime();

    this.store.dispatch(
      new LoginSuccess({
        token: {
          access_token: authInfos[0]['access_token'],
          refresh_token: authInfos[4]['id_token']
        },
        expires_at: moment()
          .add(1, 'm')
          .format('YYYY-MM-DD HH:mm:ss'),
        username: 'admin'
      })
    );

    // this.router.navigate(['/admin']);
  }
}
