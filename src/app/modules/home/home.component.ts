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

  constructor(private homeService: HomeService,
              private comentarioService: ComentarioService,
              private router: Router) {}


  ngOnInit() {
    this.findAll();
    this.comentario = new Comentario;
  }



  findAll() {
    this.homeService.findAll().subscribe(res => {
      console.log(res);
       this.colaboracoes = res;
    });
  }

  findAllComentario(id: number) {
    this.comentarioService.getAllComentariosByColaboracaoId(id).subscribe( res => {
      this.comentarios = res;
      console.table(res);
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
        return this.displayDialog = false;
    }
    return this.displayDialog = false;
  }

}
