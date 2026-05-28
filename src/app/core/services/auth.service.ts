import { Injectable, inject } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  // authState emite null cuando no hay sesion, o el objeto User cuando hay sesion.
  // toSignal convierte el Observable en un signal reactivo para usar en templates.
  currentUser = toSignal(authState(this.auth));

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  // Abre el popup de Google y autentica al usuario.
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  logout() {
    return from(signOut(this.auth));
  }

  get uid(): string | null {
    return this.currentUser()?.uid ?? null;
  }
}
