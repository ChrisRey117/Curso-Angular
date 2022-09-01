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
  empresa = "Google";
  propertyBidingCheck = false;
  textoRegistro="El usuario no esta registrado";

  registroUsuario(event:Event){
    if((<HTMLInputElement>event.target).value == "si"){
      this.textoRegistro="El usuario esta registrado";
    }else{
      this.textoRegistro="El usuario no esta registrado";
    }
  }

  getEdad(){
    return this.edad;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
