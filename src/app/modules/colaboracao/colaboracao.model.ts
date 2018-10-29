import { PlanoServico } from './../plano/plano.model';
import { Provedor } from './../provedor/provedor.model';
import { Pessoa } from './../pessoa/pessoa.model';
import { Data } from '@angular/router';
export class Colaboracao{

    constructor(
    public id?: number,
    public dataCriacao?: Data,
    public descricao?: string,
    public nome?: string,
    public aprovado?: string,
    public versao?: string,
    public dataAtualizacao?: Data,
    public pessoa?:Pessoa,
    public provedor?:Provedor,
    public plano?: PlanoServico
    ){}
}