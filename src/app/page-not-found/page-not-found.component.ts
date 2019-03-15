import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const source$ = timer(5000);
    source$.subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
