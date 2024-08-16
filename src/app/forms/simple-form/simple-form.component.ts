import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShowErrorsDirective } from '../../directives/show-errors.directive';
import { LettersOnlyDirective } from '../../directives/ letters-only.directive';
interface IForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
}

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowErrorsDirective,
    LettersOnlyDirective,
  ],
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css', '../forms.css'],
})
export class SimpleFormComponent implements OnInit {
  form = new FormGroup<IForm>({
    firstName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  ngOnInit(): void {
    this.form.statusChanges.subscribe(console.log);
    this.form.valueChanges.subscribe(console.log);
  }
  submit() {
    console.log(this.form.value);
  }

  get firstName() {
    return this.form.get('firstName') as FormControl<string | null>;
  }
  get lastName() {
    return this.form.get('lastName') as FormControl<string | null>;
  }

  reset() {
    this.form.reset();
  }
}
