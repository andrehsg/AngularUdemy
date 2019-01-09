import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Injectable()
export class RecipeGuardComponent implements CanActivate {

  constructor(private loginService: AuthserviceService) {}

  canActivate() {
    return this.loginService.isLoggedIn();
  }
}