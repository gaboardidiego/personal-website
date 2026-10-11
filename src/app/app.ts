import { Component, computed, signal } from '@angular/core';
import {
  education,
  experience,
  portfolio,
  projectFilters,
  projects,
  skills,
} from './data/portfolio';
import type { ProjectFilter } from './models/portfolio';
import { ProjectCard } from './sections/project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly portfolio = portfolio;
  protected readonly experience = experience;
  protected readonly education = education;
  protected readonly skills = skills;
  protected readonly projectFilters = projectFilters;
  protected readonly activeProjectFilter = signal<ProjectFilter>('All');
  protected readonly visibleProjects = computed(() => {
    const activeFilter = this.activeProjectFilter();
    return activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  });
  protected readonly currentYear = new Date().getFullYear();

  protected selectProjectFilter(filter: ProjectFilter): void {
    this.activeProjectFilter.set(filter);
  }
}
