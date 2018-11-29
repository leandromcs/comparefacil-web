import { element } from 'protractor';
import { session } from './../../../environments/session';
import { PessoaService } from './../pessoa/pessoa.service';
import { Pessoa } from './../pessoa/pessoa.model';
import { Like } from './../like/like.model';
import { LikeService } from './../like/like.service';
import { Observable } from 'rxjs';
import { ComentarioService } from './../comentario/comentario.service';
import { HomeService } from './home.service';
import { Colaboracao } from './../colaboracao/colaboracao.model';
import { ColaboracaoService } from './../colaboracao/colaboracao.service';
import { Component, OnInit } from '@angular/core';
import { Comentario } from '../comentario/comentario.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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
  like: Like;
  stars: number;
  numberLikes: number;
  numberDeslike: number;
  cargo: string;
  isLike: boolean;
  isDeslike: boolean;
  teste: string;
  pessoa: Pessoa;

  constructor(private homeService: HomeService,
    private comentarioService: ComentarioService,
    private router: Router,
    private likeService: LikeService,
    private pessoaService: PessoaService) {}

  ngOnInit() {
    this.pessoa =  new Pessoa;
    this.ativaBusca = false;
    this.showDiv = false;
    this.stars = 0;
    this.numberLikes = null;
    this.comentario = new Comentario;
    this.like = new Like;
    this.findAll();
    this.teste = 'Uau';
  //  this.meta();

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
      this.colaboracoes = res;
      this.colaboracoes.forEach(colaboracao => {
      });
      this.ativaBusca = true;
    });
  }

  // meta() {
  //   this.homeService.findAll().subscribe(res => {
  //     this.colaboracoes = res;
  //     this.colaboracoes.forEach(colaboracao => {

  //       this.likeService.getLike(colaboracao.id).subscribe(res => {
  //         this.numberLikes = res;

  //         this.likeService.getDeslike(colaboracao.id).subscribe(res => {
  //           this.like = res;
  //           this.stars = this.numberLikes - this.numberDeslike;
  //           console.log(this.stars);
  //         });
  //       });
  //     });
  //   });
  // }

  quantidadeCurtidas(id: number) {

    this.likeService.getLike(id).subscribe(res => {
      this.numberLikes = res;
    });

    this.likeService.getDeslike(id).subscribe(res => {
      this.numberDeslike = res;
    });
  }

  findAllComentario(id: number) {
    this.comentarioService.getAllComentariosByColaboracaoId(id).subscribe(res => {
      this.comentarios = res;
      //if (this.comentarios.length) {
      //  console.log('BATEU')
       // return this.showDiv = false;
     // }
      this.showDiv = true;
    });
  }




  /** Faz a busca aqui por cometario*/
  selecionado(event: Event, colaboracao: Colaboracao) {
    
    //Desabilita os botoes coloridos
    this.isLike = false;
    this.isDeslike = false;

    this.colaboracaoSelecionada = colaboracao;

    this.pessoaService.searchByEmail(sessionStorage.getItem(session.email)).subscribe( res => {
      this.pessoa = res;
          this.likeService.findLikeByPessoaAndColaboracao(this.pessoa.id, this.colaboracaoSelecionada.id).subscribe( res => {
            this.like = res;
                if (this.like.flagLike === 'LIKE') {
                  this.isLike = true;
                } else if (this.like.flagLike === 'DESLIKE') {
                  this.isDeslike = true;
                }
          });
    }); 
    
      
     this.quantidadeCurtidas(this.colaboracaoSelecionada.id);
    this.findAllComentario(this.colaboracaoSelecionada.id);

    this.displayDialog = true;

    event.preventDefault();
  }



  /** Adiciona o comentario */
  concluir() {
    if (this.comentario.descricao != null) {
     // this.findAllComentario(this.colaboracaoSelecionada.id);
      this.comentario.colaboracao = this.colaboracaoSelecionada;
      this.pessoaService.searchByEmail(sessionStorage.getItem(session.email)).subscribe( res => {
        this.comentario.pessoa = res;
      });
      alert(this.comentario.pessoa.nome);
      this.comentarioService.create(this.comentario).subscribe(res => {
        this.comentario.descricao = null; // Limpar o campo
      });
      this.findAllComentario(this.colaboracaoSelecionada.id);
    }
  //  return this.displayDialog = false; DESABILITAR O COMENTARIO
  }

  avaliar(res: string) {

  
    this.teste = 'indigo';
    console.log(this.pessoa.id)
    this.like.idPessoa = this.pessoa.id; // RESOLVER O PROBLEMA DE STAR SETANDO NULL EM IDPESSOA
    console.log(this.like.idPessoa)
    this.like.idColaboracao = this.colaboracaoSelecionada.id;
    this.like.flagLike = res;

    if ( res === 'LIKE') {
      this.isLike = true;
      this.isDeslike = false;
    } else {
      this.isLike = false;
      this.isDeslike = true;
    }

    this.likeService.like(this.like).subscribe( res => {
        this.quantidadeCurtidas(this.colaboracaoSelecionada.id);
    });

  }

                        /*Funções especificas */

  searchPessoaByEmail(email) {
    this.pessoaService.searchByEmail(email).subscribe( res => {
      this.comentario.pessoa = res;
    });
  } 
  searchLikeByPessoa(idPessoa: number, idColaboracao: number) {
    this.likeService.findLikeByPessoaAndColaboracao(idPessoa,idColaboracao).subscribe( res => {
      this.like = res;
    });

  }



}
