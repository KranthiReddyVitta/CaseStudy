import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function positiveNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    return value < 0 ? { positive: true } : null;
  };
}
