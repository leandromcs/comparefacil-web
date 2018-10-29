import { PlanoServico } from './../plano/plano.model';
import { ColaboracaoService } from './colaboracao.service';
import { Colaboracao } from './colaboracao.model';
import { ColaboracaoComponent } from './colaboracao.component';
import { OnInit, Component } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa.model';
import { Provedor } from '../provedor/provedor.model';
import { SelectItem } from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';

@Component({
    templateUrl: './colaboracao.form.component.html',
  })
export class ColaboracaoFormComponent implements OnInit {

    pessoa: Pessoa;
    colaboracao: Colaboracao;
    provedor: Provedor;
    provedores: Provedor[];
    plano: PlanoServico;
    saved: boolean;

    constructor(private colaboracaoService: ColaboracaoService) {}

    ngOnInit() {
        this.saved = false;
        this.colaboracao = new Colaboracao;
        this.colaboracao.planoServico = new PlanoServico;
        this.colaboracao.planoServico.provedora = new Provedor;
        this.provedores = [];
        this.colaboracaoService.findAllProvedores().subscribe(res => {
            this.provedores = res;
        });

    }


    save() {
        console.log('Colaboradores: ', this.colaboracao);
        this.colaboracaoService.createPlano(this.colaboracao.planoServico).subscribe(res => {
            this.colaboracao.planoServico = res;
            this.colaboracaoService.create(this.colaboracao).subscribe( res => {
                this.saved = true;
            });
        });
    }
 } 