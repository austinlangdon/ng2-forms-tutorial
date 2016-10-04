import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements OnInit {

  complexForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.complexForm = formBuilder.group({
      'firstName' : '',
      'lastName': '',
      'gender': false,
      'running': false,
      'swimming': false,
      'hiking': false
    });
   }

  ngOnInit() { }

  submitForm(value: any): void {
    console.log('Reactive Form Data:');
    console.log(value);
  } 

}
