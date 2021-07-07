import { ItemPedidoDto } from "../interfaces/item.venda.dto";
import { Animal } from "./animal.model";
import { Pessoa } from "./pessoa.model";

export interface Venda {
        idVenda: string;
        pessoa: Pessoa;
        dataVenda: Date;
        animal: Animal;
        itens: ItemPedidoDto[];
        valorItem: number;
        totalVenda: number; 
        
    
}