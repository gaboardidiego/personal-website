import { Component, input } from '@angular/core';
import type { Portfolio } from '../../models/portfolio';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
})
export class HeroSection {
  readonly portfolio = input.required<Portfolio>();
}
