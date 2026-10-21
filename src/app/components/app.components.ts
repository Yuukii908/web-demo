import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponents } from './navbar/navbar.component';
import { FooterComponents } from './footer/footer.components';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NavbarComponents,
        FooterComponents
    ],
    templateUrl: './app.components.html'
})
export class AppComponent {}