import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa.form.component.html'
})
export class PessoaFormComponent implements OnInit {

  private pessoa: Pessoa;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
  }



  save(){
    console.table(this.pessoa);
    this.pessoaService.create(this.pessoa).subscribe();
  }

}
