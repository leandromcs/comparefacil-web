import { Data } from '@angular/router';
import { Pessoa } from '../../../pessoa/pessoa.model';
import { Colaboracao } from '../../colaboracao.model';
export class AvaliarColaboracao {
    constructor (
       public dataAvaliacao?: Data,
       public comentario?: string,
       public pessoa?: Pessoa,
       public colaboracaoId?: number
    ) {}
}