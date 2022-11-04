import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.email]],
    contraseña:['Administrador1', [Validators.required]],
    repcontraseña:['Administrador1'],
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
