import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showVentasModal: boolean = false;
  showComprasModal: boolean = false;

  constructor() {}

  openVentasModal(): void {
    this.showVentasModal = true;
    this.showComprasModal = false; 
  }

  openComprasModal(): void {
    this.showComprasModal = true;
    this.showVentasModal = false; 
  }

  closeVentasModal(): void {
    this.showVentasModal = false;
  }

  closeComprasModal(): void {
    this.showComprasModal = false;
  }
}
