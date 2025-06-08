import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CarouselComponent } from '../carousel/carousel.component';
import { CokieComponent } from '../cokie/cokie.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CokieComponent, MatButtonToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
