import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag'; // Importe o TagModule

@Component({
  selector: 'app-card',
  standalone: true, // Adicionado para indicar que é um componente standalone
  imports: [
    CardModule,
    ButtonModule,
    TagModule // Adicione o módulo aqui
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardTitle: string ='';
  @Input() cardSubtitle: string = '';

}
// link: https://primeng.org/card.
// é necessário importar o CardModule e ButtonModule do primeng no componente CardComponent.
