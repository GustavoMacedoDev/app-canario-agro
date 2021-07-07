import { stringify } from "@angular/compiler/src/util";
import { Animal } from "./animal.model";

export class Peso {
    constructor(
        public id: string,
        public peso: number,
        public dataRegistro: Date,
        public animal: Animal
        ) {
        


    }
}