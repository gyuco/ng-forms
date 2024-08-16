import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { LettersOnlyDirective } from '../../directives/ letters-only.directive';
import { ShowErrorsDirective } from '../../directives/show-errors.directive';
import { ActiveInputComponent } from './active-input/active-input.component';

interface IForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  active: FormControl<boolean | null>;
}

@Component({
  selector: 'app-custom-inputs',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowErrorsDirective,
    LettersOnlyDirective,
    ActiveInputComponent,
  ],
  templateUrl: './custom-inputs.component.html',
  styleUrls: ['./custom-inputs.component.css', '../forms.css'],
})
export class CustomInputsComponent {
  form = new FormGroup<IForm>({
    firstName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    active: new FormControl({
      value: false,
      disabled: false,
    }),
  });

  submit() {
    console.log(this.form.value);
  }
}
