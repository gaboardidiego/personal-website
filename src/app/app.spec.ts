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

  it("renders Diego's source profile and CV sections", async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Diego Gaboardi');
    expect(compiled.textContent).toContain('Senior Software Developer at PTC');
    expect(compiled.textContent).toContain('large language models');
    expect(compiled.textContent).toContain('Windchill AI Assistant');
    expect(compiled.textContent).toContain('PTC · Windchill');
    expect(compiled.textContent).toContain('PTC · Vuforia');
    expect(compiled.textContent).not.toContain('Logos are trademarks of their respective owners.');
    expect(compiled.textContent).toContain('2025 — Present');
    expect(compiled.textContent).toContain('Based in Vienna, Austria · Working for PTC');
    expect(compiled.textContent).toContain('to LLM-powered applications');
    expect(compiled.textContent).toContain('with honors');
    expect(compiled.textContent).toContain('Monte Rosa');
    expect(compiled.querySelector('.contact__phone')).toBeFalsy();
    expect(compiled.querySelector('.hero a[download]')?.getAttribute('href')).toBe(
      'cv/diego-gaboardi-cv.pdf',
    );
    expect(compiled.textContent).not.toContain('Vuforia, PTC');
    expect(compiled.textContent).toContain('CV-based collision avoidance system for motorbikes');
    expect(compiled.querySelector('#work')).toBeFalsy();
    expect(compiled.querySelector('#experience')).toBeTruthy();
    expect(compiled.querySelector('#interests')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
    expect(compiled.textContent).not.toContain('Hohlweggase');
    expect(compiled.textContent).not.toContain('View experience');
    expect(compiled.textContent).not.toContain('Areas of expertise');
    expect(compiled.querySelector('.skill-list')).toBeFalsy();
  });

  it('marks the current role and shows logos in career history', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.timeline-item--current')).toHaveLength(1);
    expect(compiled.querySelector('.timeline-item--current')?.textContent).toContain('Windchill');
    expect(compiled.querySelectorAll('.focus-card')).toHaveLength(3);
    expect(compiled.querySelector('.about__statement')).toBeFalsy();
    expect(compiled.querySelector('.about__highlight')).toBeFalsy();
    expect(compiled.querySelector('.band')).toBeFalsy();
    expect(compiled.querySelectorAll('.timeline-item .logo-row img')).toHaveLength(7);
    expect(compiled.querySelectorAll('.education-item__logo')).toHaveLength(3);
  });

  it('renders a footer with the year and a prominent email link', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.site-footer')?.textContent).toContain(
      `© ${new Date().getFullYear()} Diego Gaboardi`,
    );
    expect(compiled.querySelector('.site-footer')?.textContent).toContain('Built with Angular');
    expect(compiled.querySelector('.contact__email')?.getAttribute('href')).toBe(
      'mailto:gaboardidiego@gmail.com',
    );
    expect(compiled.querySelectorAll('.contact__details svg')).toHaveLength(2);
  });

  it('uses the supplied profile and interest images', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.hero__portrait img')?.getAttribute('src')).toBe(
      'images/profile.jpg',
    );
    expect(compiled.querySelectorAll('.interest img')).toHaveLength(3);
    expect(compiled.querySelector('.interest img')?.getAttribute('src')).toBe('images/running.jpg');
  });
});
