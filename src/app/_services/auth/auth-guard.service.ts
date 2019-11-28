import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public authServ: AuthenticationService) { }

  canActivate() {
    // this.authServ
    return false
  }
}
