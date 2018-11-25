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
                            {label: 'Pessoa', icon: 'pi pi-fw pi-external-link', routerLink: '/pessoa', items: [
                                  {label: 'Cadastrar Pessoa', icon: 'pi pi-fw pi-plus', routerLink: '/pessoa/new'}
                            ]},
                            {
                               label: 'Provedor',
                               icon: 'pi pi-fw pi-external-link',
                               items: [
                                      {label: 'Cadastrar uma Provedora', icon: 'pi pi-fw pi-plus', routerLink: '/provedor/new'}
                                    ]
                            },
                            {
                              label: 'Colaborações',
                              icon: 'pi pi-fw pi-external-link',
                              items: [
                                {label: 'Cadastrar Colaboração', icon: 'pi pi-fw pi-plus', routerLink: '/colaboracao/new'}
                              ]
                            }

                        ]
                    },
                    {label: 'Login', icon: 'pi pi-user'},
                    {separator: true},
                    {label: 'Logout', icon: 'pi pi-fw pi-times'},
                    {label: 'Inicio',icon: 'pi pi-home', routerLink:'/'}
                ]
            }

    ];
  }

}
