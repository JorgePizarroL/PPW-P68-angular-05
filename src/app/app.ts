import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppHeaderComponent } from './components/header/header';
import { AppFooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    AppFooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}