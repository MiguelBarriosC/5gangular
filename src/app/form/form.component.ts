import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() Persona: string;
  naturalForm = this.fb.group({
    pname: ['', Validators.required],
    papellidos: ['', Validators.required],
    pcedula: ['', Validators.required],
    pdireccion: ['', Validators.required],
    pciudad: ['', Validators.required],
    ptelefono: ['', Validators.required],
    pemail: ['', Validators.required],
    pdescripcion: ['', Validators.required],
    cname: ['', Validators.required],
    capellidos: ['', Validators.required],
    ccargo: ['', Validators.required],
    cemail: ['', Validators.required],
    ctelefono: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.Persona);
  }

  naturalOnSubmit() {
    if (this.naturalForm.valid) {
      alert('TODO ESTA GOOD');
    } else {
      alert('Algo anda mal');
    }
    this.naturalForm.reset();
  }
}
