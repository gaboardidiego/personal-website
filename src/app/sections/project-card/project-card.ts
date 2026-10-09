import { Component, input } from '@angular/core';
import type { Project } from '../../models/portfolio';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
