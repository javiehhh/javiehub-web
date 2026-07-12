import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {

  technologies = [
    {name: 'Java',
      icon: '☕',
      description: 'Programming Language'
    },
    {
      name: 'Spring Boot',
      icon: '🍃',
      description: 'Backend Framework'
    },
        {
      name: 'Kotlin',
      icon: '📱',
      description: 'Programming Language'
    },
    {
      name: 'Angular',
      icon: '🅰️',
      description: 'Frontend Framework'
    }
  ]

}
