import { Component, OnInit } from '@angular/core';
import { getStatistics, StatisticsData } from 'src/app/services/endpoints'; 
import { formatCurrency } from 'src/app/utils/utils';

@Component({
  selector: 'app-estadisticas-modal',
  templateUrl: './estadisticas-modal.component.html',
  styleUrls: ['./estadisticas-modal.component.css']
})
export class EstadisticasModalComponent implements OnInit {
  statisticsData: StatisticsData[] = [];

  displayedColumns: string[] = ['month', 'quantity', 'totalSale'];

  constructor() { }

  async ngOnInit() {
    await this.fetchStatistics();
  }

  async fetchStatistics() {
    const token = localStorage.getItem('userData');
    if (token) {
      const userData = JSON.parse(token);
      const statistics = await getStatistics(userData.token);
      if (statistics) {
        this.statisticsData = statistics;
      } else {
        console.error('Error fetching statistics');
      }
    } else {
      console.error('Token not found in localStorage');
    }
  }

  formatTotalSale(totalSale: number) {
    return formatCurrency(totalSale);
  }
}
