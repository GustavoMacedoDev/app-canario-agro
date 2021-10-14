export class Animal {

	constructor(
		public id: string,
		public nome: string,
		public dataEntrada: Date,
		public pesoEntrada: number,
		public pesoAtual: number,
        public identificacao: string,
        public produtor: string,
        public fornecedor: string,
        public raca: string,
        public categoria: string,
        public sexo: string,
		public status: string,
		public mae: string,
		public pai: string

		) {}

}