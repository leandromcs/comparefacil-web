import { AvaliacaoColaboracaoService } from './avalicao-colaboracao.service';
import { Pessoa } from './../../../pessoa/pessoa.model';
import { AvaliarColaboracao } from './avaliar-colaboracao.model';
import { ColaboracaoService } from './../../colaboracao.service';
import { Component, OnInit } from '@angular/core';
import { Colaboracao } from '../../colaboracao.model';
import { PlanoServico } from '../../../plano/plano.model';
import { Provedor } from '../../../provedor/provedor.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';


@Component({
    templateUrl: './avaliar-colaboracao.detail.html',
    styleUrls: ['./avaliar-colaboracao.css']
})
// tslint:disable-next-line:component-class-suffix
export class AvaliarColaboracaoDetail implements OnInit {

    avaliacaoColaboracao: AvaliarColaboracao;
    colaboracao: Colaboracao;
    private subscription: Subscription;
    showDisable: boolean;
    

    constructor (
        private route: ActivatedRoute,
        private colaboracaoService: ColaboracaoService,
        private avaliarColaboracaoService: AvaliacaoColaboracaoService
    ) {}

    ngOnInit() {
        this.avaliacaoColaboracao =  new AvaliarColaboracao;
        this.avaliacaoColaboracao.comentario = null;
        this.colaboracao = new Colaboracao;
        this.colaboracao.planoServico = new PlanoServico;
        this.colaboracao.planoServico.provedora = new Provedor;
        this.showDisable = true;
        this.subscription = this.route.params.subscribe((params) => {
             this.getColaboracaoById(params['id']);
        });
    }

    getColaboracaoById(id: number) {
        return this.colaboracaoService.findId(id).subscribe(res => {
             this.colaboracao = res;
        });
    }

    avaliacao(res: string) {
    this.avaliacaoColaboracao.comentario = '';
    this.avaliacaoColaboracao.comentario.trim();
    console.log(this.avaliacaoColaboracao.comentario.length)
        if (!(this.avaliacaoColaboracao.comentario === null || this.avaliacaoColaboracao.comentario.length === 0)) {
            this.avaliacaoColaboracao.idColaboracao = this.colaboracao.id;
            this.avaliacaoColaboracao.idPessoa = null;
            this.avaliarColaboracaoService.create(this.avaliacaoColaboracao).subscribe();
        }
        if (res === 'APROVADO') {
            this.colaboracao.aprovado = res;
            return this.colaboracaoService.update(this.colaboracao).subscribe();
        }
        this.colaboracao.aprovado = res;
        return this.colaboracaoService.update(this.colaboracao).subscribe();
    }

}