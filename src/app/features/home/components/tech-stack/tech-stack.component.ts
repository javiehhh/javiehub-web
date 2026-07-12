import { Component } from '@angular/core';
import { Technology } from '../../../../core/models/technology.model';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStack {

  technologies : Technology [] = [
    { name: 'Java',
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
