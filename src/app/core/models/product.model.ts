export interface ProductCategory {
    id: string; // Firebase IDs son strings
    name: string;
    description: string;
    image: string;
    alt: string;
    order?: number; // Para ordenar las categorías
}

export interface Product {
    id: string; // Firebase IDs son strings
    name: string;
    description: string[];
    price?: number;
    image: string;
    alt: string;
    categoryId: string; // ¡Aquí está la magia! Solo el ID
    allergens?: string[];
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    order?: number;
}