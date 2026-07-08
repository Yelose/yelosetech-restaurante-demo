export interface Dish {
    id: number;
    name: string;
    description: string[];
    price?: number;
    image: string;
    alt: string;
    category: DishCategory;
    allergens?: string[];
}

export interface DishCategory {
    name: string;
    id: string;
    description: string;
    image: string;
    alt: string;
}
