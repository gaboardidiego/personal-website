import { Component } from '@angular/core';
import { education, experience, interests, portfolio } from './data/portfolio';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly portfolio = portfolio;
  protected readonly experience = experience;
  protected readonly education = education;
  protected readonly interests = interests;
}
