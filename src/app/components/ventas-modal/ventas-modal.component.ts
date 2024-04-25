import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas-modal',
  templateUrl: './ventas-modal.component.html',
  styleUrls: ['./ventas-modal.component.css']
})
export class VentasModalComponent {
  showEstadisticasModal: boolean = false;

  constructor() {}

  openEstadisticasModal(): void {
    this.showEstadisticasModal = true;
  }

  closeEstadisticasModal(): void {
    this.showEstadisticasModal = false;
  }
}
