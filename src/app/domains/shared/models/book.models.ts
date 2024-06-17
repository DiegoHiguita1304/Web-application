import { Category } from "./category.model";

export interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    creationAt: string;
    category: Category;
}