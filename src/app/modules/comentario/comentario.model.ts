import { Colaboracao } from './../colaboracao/colaboracao.model';
import { Pessoa } from '../pessoa/pessoa.model';

export class Comentario {

    constructor(
        public id?: number,
        public dataCriacao?: Date,
        public descricao?: string,
        public pessoa?: Pessoa,
        public colaboracao?: Colaboracao

    ) {}
}