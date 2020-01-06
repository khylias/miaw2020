import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { TokenStorageService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public tokenStorageService: TokenStorageService, private router: Router) {

  }

  public disconnect(): void {
    this.tokenStorageService.disconnect();
    this.router.navigate(['/']);
  }
}
