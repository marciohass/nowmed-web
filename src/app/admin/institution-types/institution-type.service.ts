import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';

import { InstitutionTypes } from './institution-types';
import { CrudService } from './../../shared/crud-service';


@Injectable({
  providedIn: 'root'
})
export class InstitutionTypeService extends CrudService<InstitutionTypes> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.api_url}`);
   }
}
