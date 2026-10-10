import { Component, input } from '@angular/core';
import type { FocusArea } from '../../models/portfolio';

@Component({
  selector: 'app-focus-section',
  templateUrl: './focus-section.html',
})
export class FocusSection {
  readonly focusAreas = input.required<FocusArea[]>();
}
