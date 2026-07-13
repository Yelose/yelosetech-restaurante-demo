import { Component, input, signal, HostListener, ElementRef, inject } from '@angular/core';
import { RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-top-nav',
  imports: [RouterModule, RouterLinkActive],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav {
  scrolled = input<boolean>(false);
  isMenuOpen = signal<boolean>(false);

  // Inyectamos el elemento raíz del componente para saber dónde estamos haciendo clic
  private eRef = inject(ElementRef);

  // Le pasamos el evento para evitar que el clic de abrir active el de cerrar a la vez
  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.isMenuOpen.update(currentState => !currentState);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  // EL REQUISITO DE TU JEFA: Cierra el menú si haces clic fuera de él
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.isMenuOpen() && !this.eRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
}