import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-page.html',
})
export class AuthPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLogin = signal(true);
  errorMessage = signal<string | null>(null);
  isLoading = signal(false);

  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  toggleMode() {
    this.isLogin.update((v) => !v);
    this.errorMessage.set(null);
    this.authForm.reset();
  }

  onSubmit() {
    if (this.authForm.invalid) return;

    const { email, password } = this.authForm.value;
    this.isLoading.set(true);
    this.errorMessage.set(null);

    const action$ = this.isLogin()
      ? this.authService.login(email!, password!)
      : this.authService.register(email!, password!);

    action$.subscribe({
      next: () => this.router.navigate(['/']),
      error: () => {
        this.errorMessage.set(
          this.isLogin()
            ? 'Correo o contrasena incorrectos.'
            : 'No se pudo crear la cuenta. El correo puede estar en uso.'
        );
        this.isLoading.set(false);
      },
    });
  }

  // Inicia sesion con Google mediante popup.
  loginWithGoogle() {
    this.errorMessage.set(null);
    this.authService.loginWithGoogle().subscribe({
      next: () => this.router.navigate(['/']),
      error: () => this.errorMessage.set('No se pudo iniciar sesion con Google.'),
    });
  }
}
