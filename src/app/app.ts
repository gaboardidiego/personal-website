import { Component } from '@angular/core';
import { CareerHistory } from './components/career-history/career-history';
import { education, experience, focusAreas, interests, portfolio } from './data/portfolio';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [CareerHistory],
})
export class App {
  protected readonly portfolio = portfolio;
  protected readonly year = new Date().getFullYear();
  protected readonly experience = experience;
  protected readonly focusAreas = focusAreas;
  protected readonly education = education;
  protected readonly interests = interests;
}
