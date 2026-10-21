import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponents } from './components/navbar/navbar.component';
import { FooterComponents } from './components/footer/footer.components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponents, FooterComponents],
  templateUrl: './components/app.components.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
