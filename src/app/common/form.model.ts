import { FormBuilder, FormGroup } from '@angular/forms';

export interface FormData<T> {
  toString(): string;
}

export interface FormModel<T, D extends FormData> {
  buildModel(formGroup: FormGroup, formData: FormData): T;

  buildForm(formBuilder: FormBuilder, formData: FormData): FormGroup;
}
