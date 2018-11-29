import { MessageService } from 'primeng/api';
import { ValidacoesUtils } from './../../util/validacoes.util';
import { EditorModule } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';

import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa.form.component.html'
})
export class PessoaFormComponent implements OnInit {

  private pessoa: Pessoa;
  saved: boolean;
  edited: boolean;
  isEdit: boolean;

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.pessoaService.findId(params['id']).subscribe(res => {
          this.pessoa = res;
          this.isEdit = true;
        })
      }
    })
  }



  save() {
    if (this.pessoa.id === undefined) {
      if (!(this.validacoes(this.pessoa) === false)) {
        this.pessoaService.create(this.pessoa).subscribe(res => {
          this.saved = true;
        });
        return;

      this.edited = true;
      this.pessoaService.update(this.pessoa).subscribe();
      return;
      }
    }
  }


  validacoes(pessoa: Pessoa) {
    if (!ValidacoesUtils.validacaoCPF(pessoa.cpf)) { this.showError('CPF Inválido'); return false }
    console.log(pessoa.password)
    if (!ValidacoesUtils.validarPassword(pessoa.password)) { this.showError('A senha deve ser maior ou igual a 8 caractéres'); return false }
  }

  showError(msg: string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'Erro', detail: msg });
  }





}
