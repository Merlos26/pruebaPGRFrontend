import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, firstValueFrom} from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class EjemploService extends UnsubscribeOnDestroyAdapter{
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
  ) { 
    super();
    this.handleError = httpErrorHandler.createHandleError('handler service');
  }

  getEjemplo(): Promise<any> {
    // http://localhost:5041/api/ejemplo/index
    let url = 'https://localhost:7116/api/ejemplo/index';
    return firstValueFrom(this.http.get(url));
  }
}
