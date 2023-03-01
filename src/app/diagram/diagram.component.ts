import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { ChartDataset } from 'chart.js';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent {
  @Input() toolUsageData: any[];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['Tool 1', 'Tool 2', 'Tool 3', 'Tool 4'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [0, 0, 0, 0], label: 'Usage' }
  ];

  updateChartData() {
    const newData = this.toolUsageData.map(item => item.usage);
    this.barChartData = [{ data: newData, label: 'Usage' }];
  }
}
