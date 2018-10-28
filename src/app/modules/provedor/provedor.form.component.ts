import { ProvedorService } from './provedor.service';
import { Component, OnInit } from '@angular/core';
import { Provedor } from './provedor.model';

@Component({
  templateUrl: './provedor.form.component.html'
})
export class ProvedorFormComponent implements OnInit {

    private provedor: Provedor;
    saved: boolean
    edited: boolean;

  constructor(private provedorService: ProvedorService) {}

  ngOnInit() {
      this.provedor = new Provedor;
  }


  save(){
    if(this.provedor.id === undefined){
       this.provedorService.create(this.provedor).subscribe();
       this.saved = true;
       return;
    }
     this.edited = true;
     this.provedorService.update(this.provedor).subscribe();
     return;
   }
}
