import { HomeService } from './home.service';
import { Colaboracao } from './../colaboracao/colaboracao.model';
import { ColaboracaoService } from './../colaboracao/colaboracao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  colaboracoes: Colaboracao[];
  colaboracaoSelecionada:Colaboracao;
  displayDialog: boolean;

  constructor(private homeService: HomeService){} 


  ngOnInit() {
    colaboracoes: [0];
    this.findAll()
  }



  findAll(){
    this.homeService.findAll().subscribe(res => {
      
       this.colaboracoes = res;

    })
  }

  selecionado(event: Event, colaboracao: Colaboracao){
    console.log('Oi')
    this.colaboracaoSelecionada = colaboracao;
    this.displayDialog = true;
    event.preventDefault();
  }

  concluir(){
    this.displayDialog = false;
  }

}
