import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('mermaidmind');

  ngOnInit() {
    this.setupScrollAnimations();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  private setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with slide-up class
    setTimeout(() => {
      const slideUpElements = document.querySelectorAll('.slide-up');
      slideUpElements.forEach((element) => {
        observer.observe(element);
      });
    }, 100);
  }
}
