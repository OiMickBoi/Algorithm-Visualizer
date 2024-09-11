import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart-demo',
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-line-chart
      [view]="view"
      [results]="multi"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale">
    </ngx-charts-line-chart>
  `,
  styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent {
  multi = [
    {
      "name": "Germany",
      "series": [
        { "name": "1990", "value": 62000000 },
        { "name": "2010", "value": 73000000 },
        { "name": "2011", "value": 89400000 }
      ]
    },
    {
      "name": "USA",
      "series": [
        { "name": "1990", "value": 250000000 },
        { "name": "2010", "value": 309000000 },
        { "name": "2011", "value": 311000000 }
      ]
    }
  ];
  
  view: [number, number] = [700, 300];
  
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  autoScale = true;
}