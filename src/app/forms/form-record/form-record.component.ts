import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormRecord,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShowErrorsDirective } from '../../directives/show-errors.directive';
import { LettersOnlyDirective } from '../../directives/ letters-only.directive';

@Component({
  selector: 'app-form-record',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowErrorsDirective,
    LettersOnlyDirective,
  ],
  templateUrl: './form-record.component.html',
  styleUrls: ['./form-record.component.css', '../forms.css'],
})
export class FormRecordComponent {
  form = new FormRecord<FormControl<string | null>>({
    firstName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl<string | null>(null),
  });

  constructor() {}
  submit() {
    console.log(this.form.value);
  }

  addControl() {
    this.form.addControl('email', new FormControl<string | null>(null));
  }

  removeControl() {
    this.form.removeControl('email');
  }
}
