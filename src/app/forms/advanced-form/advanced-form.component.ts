import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ShowErrorsDirective } from '../../directives/show-errors.directive';
import { LettersOnlyDirective } from '../../directives/ letters-only.directive';
import { firstNameInput } from '../../controls/firstName.input';

interface IForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  address: FormGroup<Address>;
}

interface Address {
  street: FormControl<string | null>;
  city: FormControl<string | null>;
}

@Component({
  selector: 'app-advanced-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowErrorsDirective,
    LettersOnlyDirective,
  ],
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.css', '../forms.css'],
})
export class AdvancedFormComponent {
  form = new FormGroup<IForm>({
    firstName: firstNameInput,
    lastName: new FormControl<string | null>(null),
    address: new FormGroup<Address>({
      street: new FormControl<string | null>(null),
      city: new FormControl<string | null>(null),
    }),
  });

  submit() {
    console.log(this.form.value);
  }
}
