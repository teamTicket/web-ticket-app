import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  alerta = true;
  toggleExpand: string;
  constructor() {
    this.toggle(this.alerta);
  }

  ngOnInit(): void {
  }

  toggle(valor: boolean){
    if (valor) {
      this.toggleExpand = 'expandir';
    } else {
      this.toggleExpand = 'contraer';
    }
  }
}
