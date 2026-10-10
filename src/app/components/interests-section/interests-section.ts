import { Component, input } from '@angular/core';
import type { Interest } from '../../models/portfolio';

@Component({
  selector: 'app-interests-section',
  templateUrl: './interests-section.html',
})
export class InterestsSection {
  readonly interests = input.required<Interest[]>();
}
