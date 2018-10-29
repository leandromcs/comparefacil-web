import { Provedor } from './../provedor/provedor.model';
export class PlanoServico {

    constructor(
        public id?: number,
        public nome?: string,
        public valor?: number,
        public descricao?: string,
        public provedora?: Provedor,
    ) { }

}