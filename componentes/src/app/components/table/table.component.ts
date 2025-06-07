import { Component } from '@angular/core';
import { TableModule } from 'primeng/table'; // Importação do módulo TableModule do PrimeNG
import { ButtonModule } from 'primeng/button'; // Importação do módulo ButtonModule do PrimeNG
import { RatingModule } from 'primeng/rating'; // Importação do módulo RatingModule do PrimeNG
import { TagModule } from 'primeng/tag'; // Importação do módulo TagModule do PrimeNG
import { CommonModule } from '@angular/common'; // Importação do módulo CommonModule do Angular
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [TableModule, ButtonModule, RatingModule, CommonModule, FormsModule, TagModule], // Importação dos módulos necessários
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  products = [
    {
      name: 'Bamboo Watch',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      rating: 5,
      inventoryStatus: 'INSTOCK'
    },
    {
      name: 'Black Watch',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      rating: 4,
      inventoryStatus: 'LOWSTOCK'
    },
    {
      name: 'Blue Band',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      rating: 3,
      inventoryStatus: 'OUTOFSTOCK'
    }
  ];

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }
}
//link:https://primeng.org/table