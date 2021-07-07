export class Pessoa {
    constructor(
        private id: string,
        private nome: string,
        private documento: string,
        private comprador: boolean,
        private fornecedor: boolean,
        private produtor: boolean
    ) {}
}