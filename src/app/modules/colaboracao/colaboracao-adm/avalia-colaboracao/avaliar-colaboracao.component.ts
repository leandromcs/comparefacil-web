import { Router } from '@angular/router';
import { Provedor } from './../../../provedor/provedor.model';
import { PlanoServico } from './../../../plano/plano.model';
import { Colaboracao } from './../../colaboracao.model';
import { OnInit, Component } from '@angular/core';
import { ColaboracaoService } from './../../colaboracao.service';

@Component({
    templateUrl: './avaliar-colaboracao.component.html'
})
export class AvaliarColaboracaoComponent implements OnInit {

    colaboracao: Colaboracao;
    colaboracoes: Colaboracao[];
    baseUrl = 'colaboracao/';

    constructor (
        private colaboracaoService: ColaboracaoService,
        private route: Router
    ) {}

    ngOnInit() {
        this.colaboracao = new Colaboracao;
        this.colaboracao.planoServico = new PlanoServico;
        this.colaboracao.planoServico.provedora = new Provedor;
        this.getAllColaboracoes();
    }
    getAllColaboracoes() {
        this.colaboracaoService.findAll().subscribe( res => {
            this.colaboracoes = res;
        });
    }

    delete(id: number) {
        this.colaboracaoService.findId(id).subscribe( res => {
            this.colaboracaoService.delete(id).subscribe();
            location.reload();
        });
    }

    routeAvaliar(id: number) {
        this.route.navigate([this.baseUrl + id + '/avaliar']);
    }
}