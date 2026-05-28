import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class AppHeroComponent {

  readonly title = signal(
    'Componentes Standalone Reutilizables'
  );

  readonly topics = signal([
    'signals',
    'computed',
    '@if',
    '@for',
    '@switch',
    'pipes'
  ]);

  readonly subtitle = computed(() =>
    `Temas activos: ${this.topics().length}`
  );

  readonly viewMode = signal<'lista' | 'resumen'>('lista');

  toggleMode(): void {
    this.viewMode.update(m =>
      m === 'lista'
        ? 'resumen'
        : 'lista'
    );
  }
}