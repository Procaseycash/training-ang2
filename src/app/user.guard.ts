import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('state=', state.root.url.toString(), 'data', next);
    const authUser: any = localStorage.getItem('authUser') || {role: 'Admin', name: 'Kazeem'};
    if ((next as any)._routerState.url === '/dashboard')  {
       window.location.href = `/dashboard/${authUser.role.toLowerCase()}`;
    }
    if (this.isLoggedIn(authUser, next)) {
      if (this.checkRole(authUser, next)) {
        return this.checkPermission(authUser, next);
      }
    }
    return false;
  }

  private checkPermission(user, next: any): boolean {
    return true;
  }

  private checkRole(user, next: any): boolean {
    return true;
  }

  private isLoggedIn(user, next: any): boolean {
    return true;
  }
}
