import { TestBed } from '@angular/core/testing';
import { CareerHistory } from './career-history';

describe('CareerHistory', () => {
  it('renders experience and education without optional logos', async () => {
    await TestBed.configureTestingModule({
      imports: [CareerHistory],
    }).compileComponents();

    const fixture = TestBed.createComponent(CareerHistory);
    fixture.componentRef.setInput('experience', [
      {
        role: 'Software Developer',
        organization: 'Example Company',
        period: '2020 — 2021',
        description: 'Built software.',
      },
    ]);
    fixture.componentRef.setInput('education', [
      {
        qualification: "Bachelor's Degree",
        institution: 'Example University',
        period: '2016 — 2020',
      },
    ]);
    fixture.componentRef.setInput('awards', [
      {
        title: 'Scholarship for best students',
        description: 'Example foundation',
        period: '2020',
      },
    ]);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.timeline-item h3')?.textContent).toContain(
      'Software Developer',
    );
    expect(compiled.querySelector('.timeline-item__highlights')).toBeNull();
    expect(compiled.querySelector('.timeline-item .logo-row')).toBeNull();
    expect(compiled.querySelector('.education-item__logo')).toBeNull();
    expect(compiled.querySelector('.education-item h3')?.textContent).toContain(
      "Bachelor's Degree",
    );
    expect(compiled.querySelector('.award-item h3')?.textContent).toContain(
      'Scholarship for best students',
    );
  });

  it('renders highlights as a bullet list when provided', async () => {
    await TestBed.configureTestingModule({
      imports: [CareerHistory],
    }).compileComponents();

    const fixture = TestBed.createComponent(CareerHistory);
    fixture.componentRef.setInput('experience', [
      {
        role: 'Software Developer',
        organization: 'Example Company',
        period: '2020 — 2021',
        description: 'Built software.',
        highlights: ['First contribution.', 'Second contribution.'],
      },
    ]);
    fixture.componentRef.setInput('education', []);
    fixture.componentRef.setInput('awards', []);
    fixture.detectChanges();

    const items = (fixture.nativeElement as HTMLElement).querySelectorAll(
      '.timeline-item__highlights li',
    );
    expect(Array.from(items).map((item) => item.textContent)).toEqual([
      'First contribution.',
      'Second contribution.',
    ]);
  });
});
