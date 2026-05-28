import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppHeroComponent } from '../../components/hero/hero';

@Component({
  selector: 'app-home-page',
  imports: [AppHeroComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  private router = inject(Router);

  goToStudentsPage(): void {
    this.router.navigate(['/students']);
  }

}