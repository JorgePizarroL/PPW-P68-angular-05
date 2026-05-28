import { Component, signal, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    UpperCasePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class AppHeaderComponent {
  readonly brand = signal('PPW Angular');

  // Inyección de dependencias
  private authService = inject(AuthService);
  private router = inject(Router);

  // Signal del usuario autenticado (null = sin sesion, User = autenticado)
  currentUser = this.authService.currentUser;

  logout() {
    this.authService.logout().subscribe(() => {
      // Redirige a la pagina de auth despues de cerrar sesion
      this.router.navigate(['/auth']);
    });
  }
}
