import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { firstNameInput } from '../../controls/firstName.input';
import { LettersOnlyDirective } from '../../directives/ letters-only.directive';
import { ShowErrorsDirective } from '../../directives/show-errors.directive';
import { AddressFormComponent } from './address-form/address-form.component';

interface IForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  address?: FormGroup<Address>;
}

interface Address {
  street: FormControl<string | null>;
  city: FormControl<string | null>;
}
@Component({
  selector: 'app-reusable-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowErrorsDirective,
    LettersOnlyDirective,
    AddressFormComponent,
  ],
  templateUrl: './reusable-form.component.html',
  styleUrls: ['./reusable-form.component.css', '../forms.css'],
})
export class ReusableFormComponent {
  form = new FormGroup<IForm>({
    firstName: firstNameInput,
    lastName: new FormControl<string | null>(null),
  });

  submit() {
    console.log(this.form.value);
  }
}
