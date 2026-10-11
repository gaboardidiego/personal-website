import { Component, input } from '@angular/core';
import type { Portfolio } from '../../models/portfolio';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
})
export class ContactSection {
  readonly portfolio = input.required<Portfolio>();
}
