import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
import {Observable, firstValueFrom} from "rxjs";
import {HandleError, HttpErrorHandlerService} from "../http-error-handler.service";

import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable({
  providedIn: 'root'
})
export class PersonaService extends UnsubscribeOnDestroyAdapter{

  private handleError: HandleError;
  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService,
              ) {
    super();
    this.handleError = httpErrorHandler.createHandleError('handler service');
  }

  getPersonas(): Promise<any>{
    let url = environment.URL + 'Persona'
    return firstValueFrom(this.http.get(url));
  }
}
