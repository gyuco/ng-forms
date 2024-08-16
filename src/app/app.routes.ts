import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'simple-form',
    loadComponent: () =>
      import('./forms/simple-form/simple-form.component').then(
        (m) => m.SimpleFormComponent
      ),
  },
  {
    path: 'advanced-form',
    loadComponent: () =>
      import('./forms/advanced-form/advanced-form.component').then(
        (m) => m.AdvancedFormComponent
      ),
  },
  {
    path: 'form-record',
    loadComponent: () =>
      import('./forms/form-record/form-record.component').then(
        (m) => m.FormRecordComponent
      ),
  },
  {
    path: 'form-array',
    loadComponent: () =>
      import('./forms/form-array/form-array.component').then(
        (m) => m.FormArrayComponent
      ),
  },
  {
    path: 'reusable-form',
    loadComponent: () =>
      import('./forms/reusable-form/reusable-form.component').then(
        (m) => m.ReusableFormComponent
      ),
  },
  {
    path: 'custom-inputs',
    loadComponent: () =>
      import('./forms/custom-inputs/custom-inputs.component').then(
        (m) => m.CustomInputsComponent
      ),
  },
];
