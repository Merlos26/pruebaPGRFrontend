import {Component, OnInit} from '@angular/core';
import {EjemploService} from '../core/service/ejemplo.service';
import {HttpClient} from '@angular/common/http';
import {HttpErrorHandlerService} from '../core/service/http-error-handler.service';
import {PersonaService} from "../core/service/prueba/persona.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {
    ejemplo: EjemploService | null;
    private personas: Observable<Object>;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    public dataSource: any;

    constructor(
        private personaService: PersonaService,
        public httpClient: HttpClient,
        httpErrorHandler: HttpErrorHandlerService
    ) {
        this.ejemplo = new EjemploService(this.httpClient, httpErrorHandler);
    }

    ngOnInit(): void {
        this.ejemplo.getEjemplo().then((result: any[]) => {
            console.log('Este es un ejemplo para conectar con el backend');
            console.log(result);
        });

        this.loadPersonas();
    }

    loadPersonas(){
        this.personaService.getPersonas().then( (result) => {
            console.log("Personas",result);
            this.dataSource = result;
        })
        console.log(this.personas);
    }
}
