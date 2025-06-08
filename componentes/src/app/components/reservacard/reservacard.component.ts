import { Component } from '@angular/core';

// Imports do Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Essencial para o [(ngModel)]

// Imports do PrimeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';         // Novo: para as tags
import { RatingModule } from 'primeng/rating';   // Novo: para a avaliação

@Component({
  selector: 'app-reservacard', // Mantendo seu seletor original
  standalone: true,      // Componentes standalone são a prática moderna no Angular
  imports: [
    // Módulos do Angular
    CommonModule,
    FormsModule,

    // Módulos do PrimeNG
    CardModule,
    ButtonModule,
    TagModule,
    RatingModule
  ],
  templateUrl: './reservacard.component.html', // Usará o novo HTML do card de reserva
  styleUrl: './reservacard.component.css'     // Usará o novo CSS do card de reserva
})
export class ReservacardComponent {
  // Nova propriedade para armazenar o valor das estrelas de avaliação
  valorAvaliacao: number = 4;
}