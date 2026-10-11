import { TestBed } from '@angular/core/testing';
import { ProjectCard } from './project-card';

const project = {
  title: 'A small project',
  category: 'Interface' as const,
  year: '2026',
  description: 'A useful project description.',
  technologies: ['Angular'],
};

describe('ProjectCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectCard] }).compileComponents();
  });

  it('renders the supplied project details', async () => {
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', project);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('A small project');
    expect(compiled.querySelector('.project-card__technologies')?.textContent).toContain('Angular');
  });
});
