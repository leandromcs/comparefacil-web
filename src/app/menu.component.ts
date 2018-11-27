import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: any[];
  cargo: string;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.cargo = params['cargo'];
      console.log(this.cargo);

  if (this.cargo === 'COLABORADOR') {
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
                    {separator: true},
                    {label: 'Logout', icon: 'pi pi-fw pi-times'},
                    {label: 'Inicio', icon: 'pi pi-home', routerLink: '/home'}
                ]
            }

    ];
  } else if(this.cargo === 'ADMINISTRADOR'){
    this.items = [{
      label: 'Menu',
      icon: 'pi pi-th-large',
      items: [{
              label: 'Acessar',
              icon: 'pi pi-fw pi-plus',
              items: [
                  {
                    label: 'Administrador',
                    icon: 'pi pi-fw pi-plus',
                    items: [{
                      label: 'Avaliar', icon: 'pi pi-fw pi-external-link', routerLink: '/colaboracao/avaliar'
                     }]
                  }
              ]
          },
          {separator: true},
          {label: 'Logout', icon: 'pi pi-fw pi-times'},
          {label: 'Inicio', icon: 'pi pi-home', routerLink: '/home'}
      ]
  }];
  }

});
  }

}
