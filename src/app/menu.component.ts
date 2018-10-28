import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: any[];
  constructor() { }
  ngOnInit() {

    this.items = [
       {
                label: 'Menu',
                icon: 'pi pi-th-large',
                items: [{
                        label: 'Acessar', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Pessoa', icon: 'pi pi-fw pi-external-link', routerLink:'/pessoa'},
                            {
                               label: 'Provedor',
                               icon: 'pi pi-fw pi-external-link',
                               items:[
                                      {label: 'Cadastrar uma Provedora', icon: 'pi pi-fw pi-external-link', routerLink:'/provedor/new'}
                                    ]
                            }
                            
                        ]
                    },
                    {label: 'Login', icon: 'pi pi-fw pi-external-link'},
                    {separator: true},
                    {label: 'Logout', icon: 'pi pi-fw pi-times'},
                    {label: 'Inicio',icon: '', routerLink:'/'}
                ]
            }
         
    ];
  }

}
