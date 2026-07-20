import { Component } from '@angular/core';
import { SidedImageText } from "../../shared/components/sided-image-text/sided-image-text";
import { TwoImagesSection } from '../../shared/components/two-images-section/two-images-section';

@Component({
  selector: 'app-about',
  imports: [SidedImageText, TwoImagesSection],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
})
export class AboutPage {
  textoEsencia = [
    'En Sal y Olivo creemos que la cocina es un punto de encuentro.',
    'Nuestra cocina es sencilla en su origen, pero cuidada en su elaboración: recetas tradicionales con un toque actual, pensadas para disfrutar en familia o entre amigos.',
    'Porque aquí, cada comida sabe a hogar.'
  ];

  // Añadimos también los textos para la historia y para disfrutar, que olvidaste incluir en tu snippet.
  textoHistoria = [
    'Sal y Olivo nace de la pasión por la cocina mediterránea y el respeto por los ingredientes de temporada. Inspirados en la tradición culinaria del sur y del levante, creamos un espacio donde la sencillez se convierte en excelencia.',
    'Cada receta es un homenaje a la cocina de siempre, reinterpretada con técnicas actuales y una cuidada selección de producto local.'
  ];
  textoFilosofia = [
    "          Trabajamos con producto fresco, proximidad y temporada. Creemos en una cocina sin artificios, donde el sabor del ingrediente es el verdadero protagonista.",
  ]
  textoDisfrutar = [
    'Sal y Olivo es un lugar pensado para compartir. Un ambiente cálido, natural y acogedor donde cada detalle está diseñado para acompañar la experiencia gastronómica.',
    'Perfecto para comidas tranquilas, cenas especiales y encuentros que se alargan sin prisa.'
  ];
}