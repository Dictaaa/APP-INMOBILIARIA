import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


interface Marker {
  id: number;
  descripcion: string;
  latitud: number;
  longitud: number;
}

const customIcon = L.icon({
  iconUrl: 'assets/img/map-marker.png',
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32] 
});

@Component({
  selector: 'app-proyectos-modal',
  templateUrl: './proyectos-modal.component.html',
  styleUrls: ['./proyectos-modal.component.css']
})
export class ProyectosModalComponent implements AfterViewInit {
  nextMarkerId = 1; 
  markerData: Marker = {
    id: 0,
    descripcion: '',
    latitud: 0,
    longitud: 0
  };
  markersMap: Map<number, L.Marker> = new Map<number, L.Marker>(); 
  map!: L.Map;
  showForm: boolean = false;

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.markersMap.forEach(marker => marker.addTo(this.map));
  }

  addMarker(): void {
    const { descripcion, latitud, longitud } = this.markerData;
    if (latitud && longitud && !isNaN(latitud) && !isNaN(longitud)) {
      const marker = L.marker([latitud, longitud], { icon: customIcon }).addTo(this.map)
        .bindPopup(descripcion);
      const markerId = this.nextMarkerId++;
      this.markersMap.set(markerId, marker);
      this.clearMarkerData();
    } else {
      console.error("Latitud y longitud no válidas.");
    }
  }

  editMarker(markerId: number): void {
    const marker = this.markersMap.get(markerId);
    if (marker) {
      this.markerData.id = markerId;
      this.markerData.descripcion = String(marker.getPopup()?.getContent()) || '';
      const latLng = marker.getLatLng();
      this.markerData.latitud = latLng.lat;
      this.markerData.longitud = latLng.lng;
      this.showForm = true;
    }
}


  saveMarker(): void {
    const { id, descripcion, latitud, longitud } = this.markerData;
    const marker = this.markersMap.get(id);
    if (marker && latitud && longitud && !isNaN(latitud) && !isNaN(longitud)) {
      marker.setLatLng([latitud, longitud]).bindPopup(descripcion);
      this.clearMarkerData();
    } else {
      console.error("No se pudo actualizar el marcador.");
    }
  }

  private clearMarkerData(): void {
    this.markerData.id = 0;
    this.markerData.descripcion = '';
    this.markerData.latitud = 0;
    this.markerData.longitud = 0;
  }

  cancelEdit(): void {
    this.clearMarkerData(); 
  }

  toggleForm(): void { 
    this.showForm = !this.showForm;
  }
}
