import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-page',
  imports: [RouterLink],
  templateUrl: './students-page.html',
  styleUrl: './students-page.css',
})
export class StudentsPage {

  readonly students = signal([
    { id: 1, name: 'Ana Ruiz' },
    { id: 2, name: 'Carlos Vega' },
    { id: 3, name: 'Marta León' },
  ]);

}