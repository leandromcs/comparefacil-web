import { Data } from "@angular/router";

export class Pessoa {

    constructor(
        public id?: number,
        public cpf?: string,
        public nome?: string,
        public email?: string,
        public password?: string,
        public dataNascimento?: Data,
        public dataUltimo?: Data,
        public ativo?: string,
        public cargo?: string,
    ) { }
}