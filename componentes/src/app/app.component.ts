import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from "./components/table/table.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, TableComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes';
}
