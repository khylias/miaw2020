import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { TokenStorageService } from './../services';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: TokenStorageService) {
  }

  canActivate() {
    if (this.authService.isAuthenticate()) {
      return true;
    }

    this.router.navigate(['/connexion']);

    return false;
  }
}
