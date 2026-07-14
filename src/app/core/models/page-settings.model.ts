export interface PageSettings {
  // URLs de las imágenes de cabecera (generadas por el Cropper)
  heroImage: {
    desktop: string; // URL de la imagen en formato horizontal (-lg.webp)
    mobile: string;  // URL de la imagen en formato vertical/cuadrado (-sm.webp)
    tablet?: string; // URL opcional para tablet (-md.webp)
  };
  
  // Puedes añadir aquí configuraciones extra en el futuro (ej. un banner de aviso temporal)
  announcementBanner?: {
    isActive: boolean;
    text: string;
  };
}