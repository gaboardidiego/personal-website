import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('renders the portfolio introduction and sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Your name');
    expect(compiled.querySelector('#work')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
  });

  it('filters projects by category', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-filter="Open source"]')?.click();
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-project-card')).toHaveLength(1);
    expect(compiled.querySelector('app-project-card')?.textContent).toContain('Project title');
  });
});
