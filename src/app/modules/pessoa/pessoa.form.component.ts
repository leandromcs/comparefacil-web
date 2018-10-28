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
  saved: boolean
  edited: boolean;

  constructor(private pessoaService: PessoaService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.route.params.subscribe(params =>{
      if(params['id']){
        console.log('ue')
        this.pessoaService.findId(params['id']).subscribe(res => {
         this.pessoa = res;
        })
      }
   })
  }



  save(){
   if(this.pessoa.id === undefined){
      this.pessoaService.create(this.pessoa).subscribe();
      this.saved = true;
      return;
   }
    this.edited = true;
    this.pessoaService.update(this.pessoa).subscribe();
    return;
  }




}
