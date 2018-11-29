import { Routes, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { routes } from './../../app.routes';
import { OnInit, Component, OnDestroy } from "@angular/core";
import { PessoaService } from "./pessoa.service";
import { Pessoa } from "./pessoa.model";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-pessoa-detail',
    templateUrl: './pessoa.detail.component.html'
})
export class PessoaDetailComponent implements OnInit, OnDestroy {


    pessoa: Pessoa;
    private subscription: Subscription;
    isView: boolean;

    constructor(
        private pessoaService: PessoaService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.pessoa = new Pessoa;

        // Busca o id na url
       this.subscription = this.route.params.subscribe((params) => {
        this.getPessoaById(params['id']);
        this.isView = true;
        });
    }


    public getPessoaById(id: number) {
        this.pessoaService.findId(id).subscribe(res => {
            this.pessoa = res;
        });
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }






}