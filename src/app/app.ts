import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNav } from "./shared/components/top-nav/top-nav";
import { Footer } from "./shared/components/footer/footer";
import { Banner } from "./shared/components/banner/banner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNav, Footer, Banner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Sal y Olivo Demo');

  // El signal se queda aquí, que es donde ocurre el scroll
  isScrolled = signal(false);

  onMainScroll(event: Event) {
    const mainElement = event.target as HTMLElement;
    // Si el <main> baja más de 50px, activamos el signal
    this.isScrolled.set(mainElement.scrollTop > 50);
  }
}
