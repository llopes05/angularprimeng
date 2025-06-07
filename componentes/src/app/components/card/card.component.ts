import { Component } from '@angular/core';
import { CardModule } from 'primeng/card'; // Atenção
import { ButtonModule } from 'primeng/button'; // Atenção
@Component({
  selector: 'app-card',
  imports: [CardModule, ButtonModule,], // Atenção
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
