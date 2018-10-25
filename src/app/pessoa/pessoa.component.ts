import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html'
})
export class PessoaComponent implements OnInit {
  
  item:any[];
  constructor(private pessoaService: PessoaService) { 
    this.item = []; 

  }


  ngOnInit() {
        this.pessoaService.findAll().subscribe(res=>{
        this.item = res;
    });
  }

}
