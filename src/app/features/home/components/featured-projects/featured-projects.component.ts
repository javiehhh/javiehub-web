import { Component } from '@angular/core';
import { Project } from '../../../../core/models/project.model';
import { ProjectCard } from '../project-card/project-card.component';

@Component({
  selector: 'app-featured-projects',
  imports: [ProjectCard],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjects {
projects: Project[] = [

    {
      title: 'Kibo App',
      description: 'Financiary health Android application, custom categories, incomes, expenses, budgets...',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase Realtime Database'],
      github: '#',
      demo: '#'
    },

    {
      title: 'Personal Portfolio',
      description: 'My personal portfolio built with Angular and Spring Boot.',
      technologies: ['Angular', 'Spring Boot'],
      github: 'https://github.com/javiehhh/javiehub-web',
      demo: '#'
    },

    {
      title: 'Minecraft Mod',
      description: 'Minecraft mod with custom blocks and items.',
      technologies: ['Java'],
      github: 'https://github.com/javiehhh/tutorial-mod',
      demo: '#'
    }
  ];
}
