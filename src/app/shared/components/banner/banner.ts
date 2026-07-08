import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-banner',
  imports: [RouterModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
// Inyección de dependencias moderna, cero constructores
  private router = inject(Router);

  // Creamos un Signal que contiene siempre la URL actual (ej: '/carta', '/nosotros', '/')
  rutaActual = toSignal(
    this.router.events.pipe(
      // Filtramos para quedarnos solo con el evento de cuando termina de navegar
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      // Extraemos la URL limpia
      map(event => event.urlAfterRedirects)
    ),
    // Le damos el valor inicial para que no sea undefined al cargar la página por primera vez
    { initialValue: this.router.url }
  );

  // Computamos la información del banner según la ruta
  // Optimizamos títulos para SEO (Keywords: Restaurante, Mediterránea, Reserva)
  info = computed(() => {
    const url = this.rutaActual();
    
    if (url.includes('nosotros')) {
      return {
        titulo: 'Nuestra Historia',
        subtitulo: 'Cocina con alma en el corazón de la ciudad',
        link: '/nosotros'
      };
    }
    if (url.includes('carta')) {
      return {
        titulo: 'Carta',
        subtitulo: 'Una experiencia mediterránea de autor',
        link: '/carta'
      };
    }
    if (url.includes('contacto')) {
      return {
        titulo: 'Contacto',
        subtitulo: 'Te esperamos para una velada inolvidable',
        link: '/contacto'
      };
    }
    // Default / Inicio
    return {
      titulo: 'Sal y Olivo',
      subtitulo: 'Donde cada comida sabe a hogar',
      link: '/contacto'
    };
  });
}
