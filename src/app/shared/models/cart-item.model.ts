import { MenuItem } from "./menu-item.model";

export class CartItem {

    constructor(
        public animal: MenuItem,
        public valorArroba: number = 300
    ) {}

    value(): number {
        return this.animal.pesoAtual * (this.valorArroba / 15);
    }
}