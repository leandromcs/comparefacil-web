import { Observable } from 'rxjs';
import { ComentarioService } from './../comentario/comentario.service';
import { HomeService } from './home.service';
import { Colaboracao } from './../colaboracao/colaboracao.model';
import { ColaboracaoService } from './../colaboracao/colaboracao.service';
import { Component, OnInit } from '@angular/core';
import { Comentario } from '../comentario/comentario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  colaboracoes: Colaboracao[];
  colaboracaoSelecionada: Colaboracao;
  displayDialog: boolean;
  comentario: Comentario;
  comentarios: Comentario[];
  showComentario: boolean;
  pesquisa: string;
  ativaBusca: boolean;
  showDiv: boolean;

  constructor(private homeService: HomeService,
              private comentarioService: ComentarioService,
              private router: Router) {}


  ngOnInit() {
    this.ativaBusca = false;
    this.showDiv = false;
    this.findAll();
    this.comentario = new Comentario;
  }


  dynamicSearch(pesquisa) {
    if (this.ativaBusca) {
      pesquisa = pesquisa.trim();
      const regexData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
      const isData = regexData.test(pesquisa);
      if (isData) {
        pesquisa = pesquisa.substring(6, 10) + '-' + pesquisa.substring(3, 5) + '-' + pesquisa.substring(0, 2);
      }
      this.homeService.dynamicSearch(pesquisa).subscribe(res => {
      this.colaboracoes = res;
      });
      if (this.colaboracoes.length === 0) {
        this.findAll();
      }
  }
  }

  findAll() {
    this.homeService.findAll().subscribe(res => {
      console.log(res);
       this.colaboracoes = res;
       this.ativaBusca = true;
    });
  }

  findAllComentario(id: number) {
    this.comentarioService.getAllComentariosByColaboracaoId(id).subscribe( res => {
      this.comentarios = res;
      if (this.comentarios.length === 0) {
        return this.showDiv = false;
      }
       this.showDiv = true;
    });
  }

  selecionado(event: Event, colaboracao: Colaboracao) {
    this.colaboracaoSelecionada = colaboracao;
    this.findAllComentario(this.colaboracaoSelecionada.id);
    this.displayDialog = true;
    event.preventDefault();
  }

  concluir() {
    if (this.comentario.descricao != null ) {
        this.comentario.colaboracao = this.colaboracaoSelecionada;
        this.comentarioService.create(this.comentario).subscribe();
        this.comentario.descricao = null;
        return this.displayDialog = false;
    }
    return this.displayDialog = false;
  }

}
