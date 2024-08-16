import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShowErrorsDirective } from '../../../directives/show-errors.directive';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ShowErrorsDirective],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css', '../../forms.css'],
})
export class AddressFormComponent {
  @Input({ required: true }) controlKey = '';
  label = 'Dirección';
  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(
      this.controlKey,
      new FormGroup({
        street: new FormControl<string | null>(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        city: new FormControl(''),
      })
    );
  }
  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
