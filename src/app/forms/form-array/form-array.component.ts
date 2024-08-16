import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { LettersOnlyDirective } from '../../directives/ letters-only.directive';
import { ShowErrorsDirective } from '../../directives/show-errors.directive';

interface IForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  tags: FormArray<FormControl<string | null>>;
  addresses: FormArray<FormGroup<any>>;
}

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowErrorsDirective,
    LettersOnlyDirective,
  ],
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css', '../forms.css'],
})
export class FormArrayComponent {
  form = new FormGroup<IForm>({
    firstName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl<string | null>(null),
    tags: new FormArray<FormControl<string | null>>([]),
    addresses: new FormArray<FormGroup<any>>([]),
  });

  submit() {
    console.log(this.form.value);
  }

  get tags() {
    return this.form.get('tags') as FormArray<FormControl<string | null>>;
  }

  get addresses() {
    return this.form.get('addresses') as FormArray<FormGroup<any>>;
  }
  addTag() {
    this.tags.push(new FormControl<string | null>(null));
  }
  removeTag(i: number) {
    this.tags.removeAt(i);
  }

  addAddress() {
    this.addresses.push(
      new FormGroup({
        street: new FormControl<string | null>(null),
        city: new FormControl<string | null>(null),
      })
    );
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }
}
