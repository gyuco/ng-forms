import { FormControl, Validators } from '@angular/forms';

export const firstNameInput = new FormControl<string | null>(null, [
  Validators.required,
  Validators.minLength(3),
]);
