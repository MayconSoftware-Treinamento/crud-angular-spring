import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group( {
      nome: [null],
      categoria: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Cadastrou');
  }

  onCancel() {
    console.log('Cancelou');
  }

}

