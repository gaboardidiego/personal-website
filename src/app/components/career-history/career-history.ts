import { Component, input } from '@angular/core';
import type { Award, Education, Experience } from '../../models/portfolio';

@Component({
  selector: 'app-career-history',
  templateUrl: './career-history.html',
})
export class CareerHistory {
  readonly experience = input.required<Experience[]>();
  readonly education = input.required<Education[]>();
  readonly awards = input.required<Award[]>();
}
