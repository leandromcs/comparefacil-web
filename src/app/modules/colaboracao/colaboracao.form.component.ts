import { PessoaService } from './../pessoa/pessoa.service';
import { session } from './../../../environments/session';
import { PlanoServico } from './../plano/plano.model';
import { ColaboracaoService } from './colaboracao.service';
import { Colaboracao } from './colaboracao.model';
import { ColaboracaoComponent } from './colaboracao.component';
import { OnInit, Component, ViewChild } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa.model';
import { Provedor } from '../provedor/provedor.model';
import { SelectItem } from 'primeng/api';
import {FileUploadModule, FileUpload} from 'primeng/fileupload';

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
    logo: File;
    logoBase: Colaboracao;


    @ViewChild('fileInput') fileInput: FileUpload;

    constructor(private colaboracaoService: ColaboracaoService, private pessoaService: PessoaService) {}


    ngOnInit() {
        this.saved = false;
        this.colaboracao = new Colaboracao;
        this.logoBase = new Colaboracao;
        this.colaboracao.planoServico = new PlanoServico;
        this.colaboracao.pessoa = new Pessoa;
        this.colaboracao.planoServico.provedora = new Provedor;
        this.provedores = [];
        this.colaboracaoService.findAllProvedores().subscribe(res => {
            this.provedores = res;
        });

    }


    save() {
            this.searchPessoaByEmail(sessionStorage.getItem(session.email));
            this.colaboracao.imagem = this.logoBase.imagem;
            console.log(this.colaboracao);
            this.colaboracaoService.createPlano(this.colaboracao.planoServico).subscribe(res => {
            this.colaboracao.planoServico = res;
            this.colaboracaoService.create(this.colaboracao).subscribe( res => {
                console.log(res);
                this.saved = true;
            });
        });
    }

    uploadFile(event: any) {
          this.logo = event.files[0];
          this.colaboracaoService.uploadFile(this.logo).subscribe(res => {
            this.logoBase = res;
          });
        }

        searchPessoaByEmail(email: string) {
            this.pessoaService.searchByEmail(email).subscribe( res => {
            this.colaboracao.pessoa = res;
            });
        }
 } 