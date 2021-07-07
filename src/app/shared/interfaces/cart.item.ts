import { Animal } from "../models/animal.model";

export interface CartItem {
    animal: Animal;
    valorItem: number;
}