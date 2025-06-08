import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from "./components/table/table.component";
import { ReservacardComponent } from "./components/reservacard/reservacard.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, TableComponent, ReservacardComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes';
}
