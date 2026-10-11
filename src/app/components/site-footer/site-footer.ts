import { Component, input } from '@angular/core';
import type { Portfolio } from '../../models/portfolio';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  readonly portfolio = input.required<Portfolio>();
  readonly year = input.required<number>();
}
