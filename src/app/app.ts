import { Component } from '@angular/core';
import { AboutSection } from './components/about-section/about-section';
import { CareerHistory } from './components/career-history/career-history';
import { ContactSection } from './components/contact-section/contact-section';
import { FocusSection } from './components/focus-section/focus-section';
import { HeroSection } from './components/hero-section/hero-section';
import { InterestsSection } from './components/interests-section/interests-section';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { education, experience, focusAreas, interests, portfolio } from './data/portfolio';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    SiteHeader,
    HeroSection,
    AboutSection,
    FocusSection,
    CareerHistory,
    InterestsSection,
    ContactSection,
    SiteFooter,
  ],
})
export class App {
  protected readonly portfolio = portfolio;
  protected readonly year = new Date().getFullYear();
  protected readonly experience = experience;
  protected readonly focusAreas = focusAreas;
  protected readonly education = education;
  protected readonly interests = interests;
}
