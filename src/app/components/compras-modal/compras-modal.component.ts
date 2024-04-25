import { Component } from '@angular/core';

@Component({
  selector: 'app-compras-modal',
  templateUrl: './compras-modal.component.html',
  styleUrls: ['./compras-modal.component.css']
})
export class ComprasModalComponent {

  showProyectosModal: boolean = false;

  constructor() {}

  openProyectosModal(): void {
    this.showProyectosModal = true;
  }

  closeProyectosModal(): void {
    this.showProyectosModal = false;
  }
}
