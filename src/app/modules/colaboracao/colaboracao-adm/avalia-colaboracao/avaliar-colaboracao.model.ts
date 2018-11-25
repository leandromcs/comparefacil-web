import { Data } from '@angular/router';
import { Pessoa } from '../../../pessoa/pessoa.model';
import { Colaboracao } from '../../colaboracao.model';
export class AvaliarColaboracao {
    constructor (
        dataAvaliacao?: Data,
        comentario?: string,
        pessoa?: Pessoa,
        colaboracao?: Colaboracao
    ) {}
}