import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-array-visual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-visual.component.html',
  styleUrl: './array-visual.component.css',
})
export class ArrayVisualComponent {
  array = [0, 1, 2, 3, 4, 5, 6];

}
