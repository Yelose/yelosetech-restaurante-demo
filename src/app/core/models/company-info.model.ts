export interface SocialMedia {
  name: string; // Ej: 'Instagram', 'TikTok', 'X'
  icon: string; // Ej: clase de icono ('pi pi-instagram', 'fa-instagram') o ruta al SVG
  url: string;  // El enlace al perfil del restaurante
}

export interface CompanyInfo {
  tradeName: string;     // Nombre comercial (Ej: Sal y Olivo)
  legalName: string;     // Razón social para textos legales
  cifNif: string;        // Identificador fiscal
  address: string;       // Dirección física
  email: string;         // Correo de contacto
  phoneNumber: string;   // Teléfono de reservas
  
  // Opcionales
  schedule?: string;     // Horario general (Ej: "Mar - Dom: 13:00 - 23:30")
  socialMedia?: SocialMedia[]; // Array dinámico de redes sociales
}