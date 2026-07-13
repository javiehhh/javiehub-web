import { Component } from '@angular/core';
import { TechStack } from './components/tech-stack/tech-stack.component';
import { Hero } from './components/hero/hero.component';
import { FeaturedProjects } from './components/featured-projects/featured-projects.component';
import { AboutMe } from './components/about-me/about-me.component';

@Component({
  selector: 'app-home',
  imports: [TechStack, Hero, FeaturedProjects, AboutMe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {

}