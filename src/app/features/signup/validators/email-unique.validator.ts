import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

// Emails simulados como ya registrados
const TAKEN_EMAILS = ['admin@test.com', 'user@test.com', 'pablo@ups.edu.ec'];

export function emailUniqueValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return of(control.value).pipe(
      delay(500),
      map((email: string) => {
        return TAKEN_EMAILS.includes(email) ? { emailTaken: true } : null;
      })
    );
  };
}
