import { session } from './../environments/session';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: any[];
  cargo: string;
  isLogin: boolean;

  constructor(private route: ActivatedRoute, private routerUrl: Router) { }
  ngOnInit() {

    this.isLogin = true;
    this.loginUrl(this.routerUrl.url);

    this.route.queryParams.subscribe(params => {
      this.cargo = params['cargo'];


  if (sessionStorage.getItem(session.role) === 'COLABORADOR') {
    this.items = [
       {
                label: 'Menu',
                icon: 'pi pi-th-large',
                items: [{
                        label: 'Acessar',
                        icon: 'pi pi-fw pi-plus',
                        items: [
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
                    {label: 'Logout', icon: 'pi pi-fw pi-times', routerLink: '/logout'},
                    {label: 'Inicio', icon: 'pi pi-home', routerLink: '/home'}
                ]
            }

    ];
  } else if (sessionStorage.getItem('role') === 'ADMINISTRADOR') {
    this.items = [{
      label: 'Menu',
      icon: 'pi pi-th-large',
      items: [{
              label: 'Controle',
              icon: 'pi pi-fw pi-plus',
              items: [
                  {
                    label: 'Colaborações',
                    icon: 'pi pi-fw pi-plus',
                    items: [{
                      label: 'Avaliar', icon: 'pi pi-fw pi-external-link', routerLink: '/colaboracao/avaliar',
                     }]
                  },
                  {
                    label: 'Usuários',
                    icon: 'pi pi-fw pi-plus',
                    items: [{
                      label: 'Consultar', icon: 'pi pi-fw pi-external-link', routerLink: '/pessoa',
                     }]
                  }
              ]
          },
          {separator: true},
          {label: 'Logout', icon: 'pi pi-fw pi-times', routerLink: '/logout'},
          {label: 'Inicio', icon: 'pi pi-home', routerLink: '/home'}
      ]
  }];
  } else if( sessionStorage.getItem(session.role) === null) {
    this.items = [{
      label: 'Menu',
      icon: 'pi pi-th-large',
      items: [{
              label: 'Registrar',
              icon: 'pi pi-fw pi-plus',
              routerLink: '/pessoa/new'
      }]
  }];
  }

});
  }


  loginUrl(url: string) {
    if (url === '/') {
      return this.isLogin = false;
    }
  }

}
