import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class Hero implements OnInit{
   titles = [
    'Java Developer',
    'Spring Boot Developer',
    'Angular Developer',
    'Kotlin Developer'
  ];

  currentTitle = signal(this.titles[0]);

  currentIndex = 0;

  ngOnInit(): void {

    setInterval(() => {

      this.currentIndex++;

      if (this.currentIndex >= this.titles.length) {
        this.currentIndex = 0;
      }

      this.currentTitle.set(
        this.titles[this.currentIndex]
      );

    }, 2500);

  }

}
