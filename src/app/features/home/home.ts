import { Component } from '@angular/core';
import { TechStack } from './components/tech-stack/tech-stack';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [TechStack, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}