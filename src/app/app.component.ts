import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChartDemoComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-chart-demo></app-chart-demo>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algo-vis-app';
}