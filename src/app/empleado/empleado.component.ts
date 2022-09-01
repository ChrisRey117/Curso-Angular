import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Christian Manuel";
  apellido = "Reyes Hernandez";
  private edad = 22;
  hobbit = "Caminar";

  getEdad(){
    return this.edad;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
