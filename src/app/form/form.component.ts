import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from './formulario.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormularioService]
})
export class FormComponent implements OnInit {

//Validacion de campos en Formulario

miFormulario: FormGroup = this.fb.group({

  correo:['', [Validators.email,Validators.required, Validators.minLength(2)]],
  nombre:['', [Validators.required, Validators.minLength(2)]],
  apellido:['', [Validators.required, Validators.minLength(2)]],

})

//Servicios

constructor( private fb: FormBuilder, 
  private _FormularioService: FormularioService ) {}


  //Reset campos Formulario

  ngOnInit() {
    this.miFormulario.reset({
      correo:'',
      nombre:'',
      apellido:'',
    })
  }

  Valido( campo: string ){  
    return this.miFormulario.controls[campo].errors 
      && this.miFormulario.controls[campo].touched;
  }

  guardar(){

  if(this.miFormulario.invalid) {
    this.miFormulario.markAllAsTouched();
  
  }

  console.log(this.miFormulario.value)
  this._FormularioService.guardar(this.miFormulario.value).subscribe(
    Response=>{
      console.log(Response);
    }
    ); 
}

}
