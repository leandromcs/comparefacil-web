import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.model';
import { PessoaDetailComponent } from './pessoa.detail.component';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html'
})
export class PessoaComponent implements OnInit {

  item: any[];
  pessoaDetail: PessoaDetailComponent;
  pessoa: Pessoa;
  private baseUrl: string = '/pessoa';

  constructor(private pessoaService: PessoaService, private router: Router, private url: ActivatedRoute) { 
    this.item = [];
  }


  ngOnInit() {
    this.findAll();
        this.pessoa = new Pessoa;
  }



  public findAll() {
    this.pessoaService.findAll().subscribe(res => {
      this.item = res;
  });
  }


  /**
   * Funcionalidade para routeamento de acordo com suas ações
   */
  public procedimento(acao: string, id: any) {

    if( acao === 'delete') {
      return this.delete(id);
    }
     return this.router.navigate([this.baseUrl, id, acao]);
  }

/**
 * Funciolaidade de desativar uma pesssoa
 */
  public delete(id: any) {
    this.pessoaService.findId(id).subscribe(res => {
      res.ativo = 'INATIVO';
      this.pessoaService.delete(id, res).subscribe();
      this.findAll();
    });

  }




  }





