import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';
import { ArrayVisualComponent } from './array-visual/array-visual.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChartDemoComponent, ArrayVisualComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-array-visual></app-array-visual>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algo-vis-app';
}