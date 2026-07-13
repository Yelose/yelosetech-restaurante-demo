import { Component, signal } from '@angular/core';
import { SidedImageText } from "../../shared/components/sided-image-text/sided-image-text";
import { FeaturedProduct } from "../../shared/components/featured-product/featured-product";
import { Product, ProductCategory } from '../../core/models/product.model';

@Component({
  selector: 'app-home',
  imports: [SidedImageText, SidedImageText, FeaturedProduct],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  // Inicializamos la señal vacía
  dishes = signal<Product[]>([]);

  starters: ProductCategory = {
    id: 'entrantes',
    name: 'Para Compartir',
    description: 'Nuestra selección de entrantes mediterráneos elaborados con productos de proximidad.',
    image: 'img/destacados/entrecot_ternera.png', // Recuerda cambiar esta imagen de categoría luego
    alt: 'Mesa con surtido de entrantes mediterráneos'
  };

  mainDishes: ProductCategory = {
    id: 'principales',
    name: 'Platos Principales',
    description: 'Carnes, pescados y arroces con el toque inconfundible de la casa.',
    image: 'img/destacados/paella_marisco.png',
    alt: 'Plato principal emplatado de forma elegante'
  };

  // Aquí tienes los datos reales sacados de tu HTML y adaptados a tu modelo
  dishesData: Product[] = [
    {
      id: '1',
      name: 'Paella de marisco',
      description: [
        'Un clásico del Mediterráneo elaborado con arroz de grano perfecto, cocinado lentamente en caldo casero y acompañado de una selección de mariscos frescos del día. Gambas, mejillones y calamares se combinan con el sabor del azafrán y el toque final del aceite de oliva virgen extra, creando un plato lleno de tradición, aroma y sabor a mar.',
        'Ideal para compartir en familia y disfrutar sin prisas del auténtico sabor mediterráneo.'
      ],
      price: 24.50,
      image: 'img/destacados/paella_marisco.png',
      alt: 'Paella de marisco',
      categoryId: this.mainDishes.id,
      allergens: ['crustáceos', 'moluscos'],
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true
    },
    {
      id: '2',
      name: 'Entrecot a parrilla',
      description: [
        'Jugoso entrecot de ternera cocinado a la brasa en su punto perfecto, con un sellado exterior dorado y un interior tierno y lleno de sabor. Acompañado de verduras asadas y patatas doradas con hierbas mediterráneas, realzado con un toque de aceite de oliva virgen extra y romero fresco.',
        'Un plato que combina la tradición de la cocina a la parrilla con la calidad de la carne de proximidad, ofreciendo una experiencia culinaria auténtica y satisfactoria.'],
      price: 27.50,
      image: 'img/destacados/entrecot_ternera.png',
      alt: 'Entrecot a parrilla',
      categoryId: this.mainDishes.id,
      allergens: ['leche'],
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true
    },
    {
      id: '3',
      name: 'Lubina al horno',
      description: [
        'Lubina fresca asada al horno con piel ligeramente crujiente y carne jugosa, aromatizada con hierbas mediterráneas, limón y un delicado toque de aceite de oliva virgen extra. Acompañada de verduras asadas y notas cítricas que realzan su sabor natural.',
        'Un plato ligero, fresco y lleno de matices, que respira mar y tradición en cada bocado.'
      ],
      price: 24.00,
      image: 'img/destacados/lubina_horno.png', // Recuerda tener esta imagen en tus assets
      alt: 'Lubina al horno',
      categoryId: this.mainDishes.id,
      allergens: ['pescado'],
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true
    },
    {
      id: '4',
      name: 'Arroz con leche casero',
      description: [
        'Arroz cremoso cocido lentamente en leche fresca, aromatizado con canela en rama y un sutil toque de limón, hasta alcanzar una textura suave y delicada. Finalizado con un ligero toque de azúcar caramelizado que aporta equilibrio y profundidad al sabor tradicional.',
        'Un postre casero, reconfortante y lleno de nostalgia, que evoca la cocina de siempre en cada cucharada.',
      ],
      price: 6.50,
      image: 'img/destacados/arroz_con_leche.png', // Recuerda tener esta imagen en tus assets
      alt: 'Arroz con leche casero',
      categoryId: this.mainDishes.id,
      allergens: ['leche'],
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true
    }];

  reviews = signal([
    {
      id: 1,
      name: 'María López',
      review: 'Una experiencia gastronómica excepcional. Cada plato es una obra de arte y el servicio es impecable.',
      rating: '★★★★★'
    },
    {
      id: 2,
      name: 'Carlos Fernández',
      review: 'El ambiente es acogedor y la comida deliciosa. Recomiendo especialmente la paella de marisco.',
      rating: '★★★★'
    },
    {
      id: 3,
      name: 'Lucía Martínez',
      review: 'Un lugar perfecto para disfrutar de la auténtica cocina mediterránea. Volveré sin duda.',
      rating: '★★★★★'
    }
  ]);


  textoEsencia = [
    'En Sal y Olivo creemos que la cocina es un punto de encuentro.',
    'Nuestra cocina es sencilla en su origen, pero cuidada en su elaboración: recetas tradicionales con un toque actual, pensadas para disfrutar en familia o entre amigos.',
    'Porque aquí, cada comida sabe a hogar.'
  ];
  textoDetalles = [
    'Cada detalle de nuestro restaurante ha sido pensado para crear una experiencia cercana y acogedora.',
    'Trabajamos con ingredientes seleccionados cuidadosamente.',
    'Inspirados por el mar, el aceite de oliva, las hierbas aromáticas y la cocina de siempre, reinterpretamos recetas tradicionales con una mirada actual, manteniendo intacta su esencia.'
  ];
}