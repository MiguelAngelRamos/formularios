import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta:false
  }

  paises = [
    {
      codigo: "CL",
      nombre: "Chile"
    },
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    },
    {
      codigo: "ARG",
      nombre: "Argentina"
    },
    {
      codigo: "CO",
      nombre: "Colombia"
    }
  ]

  sexos:string[]=["Hombre", "Mujer"];
  constructor() { }

  guardar(forma: NgForm) {

    console.log("NgForm", forma);
    console.log("Valor forma", forma.value)
    console.log("Usuario", this.usuario);
  }
}
