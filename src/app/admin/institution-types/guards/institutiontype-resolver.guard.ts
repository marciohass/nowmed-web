import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { InstitutionTypeService } from '../institution-type.service';
import { InstitutionTypes } from './../institution-types';

@Injectable({
  providedIn: 'root'
})
export class InstitutionTypeResolverGuard implements Resolve<InstitutionTypes> {

  constructor(private service: InstitutionTypeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InstitutionTypes> {

    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      description: null
    });
  }

}
