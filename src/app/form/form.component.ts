import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

miFormulario: FormGroup = this.fb.group({

  correo:['', [Validators.email,Validators.required, Validators.minLength(2)]],
  nombre:['', [Validators.required, Validators.minLength(2)]],
  apellido:['', [Validators.required, Validators.minLength(2)]],

})

constructor( private fb: FormBuilder ) {}


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
    return;
  }

  console.log(this.miFormulario.value)
}

}
