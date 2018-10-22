import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html'
})
export class PessoaComponent implements OnInit {

  constructor() { }

  item: any[];
  ngOnInit() {
    this.item = [{"nome":"Paulo Junior"}]
  }

}
