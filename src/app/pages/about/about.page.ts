import { Component } from '@angular/core';
import { SidedImageText } from "../../shared/components/sided-image-text/sided-image-text";

@Component({
  selector: 'app-about',
  imports: [SidedImageText],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
})
export class AboutPage {
  textoEsencia = [
    'En Sal y Olivo creemos que la cocina es un punto de encuentro.',
    'Nuestra cocina es sencilla en su origen, pero cuidada en su elaboración: recetas tradicionales con un toque actual, pensadas para disfrutar en familia o entre amigos.',
    'Porque aquí, cada comida sabe a hogar.'
  ];
}
