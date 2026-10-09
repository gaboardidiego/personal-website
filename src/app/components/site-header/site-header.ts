import { Component, input } from '@angular/core';
import type { Portfolio } from '../../models/portfolio';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
})
export class SiteHeader {
  readonly portfolio = input.required<Portfolio>();
}
