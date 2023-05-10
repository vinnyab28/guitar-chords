import { Component, OnDestroy } from '@angular/core';
import { Theme, ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  currentTheme: string;
  currentTheme$: Subscription = new Subscription();

  constructor(private themeService: ThemeService) {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  onToggleTheme() {
    this.currentTheme === Theme.DARK ? this.themeService.toggleTheme(Theme.LIGHT) : this.themeService.toggleTheme(Theme.DARK);
  }

  ngOnDestroy(): void {
    this.currentTheme$.unsubscribe();
  }
}
