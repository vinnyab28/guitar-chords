import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'guitar-chords';
  currentTheme$: Subscription = new Subscription();

  constructor(@Inject(DOCUMENT) private document: Document, private themeService: ThemeService) {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.document.body.setAttribute('data-bs-theme', theme);
    });
  }

  ngOnDestroy(): void {
    this.currentTheme$.unsubscribe();
  }
}
