import { Component, input } from '@angular/core';
import type { FocusArea, Portfolio } from '../../models/portfolio';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.html',
})
export class AboutSection {
  readonly portfolio = input.required<Portfolio>();
  readonly focusAreas = input.required<FocusArea[]>();
}
