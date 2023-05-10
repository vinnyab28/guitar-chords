import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.LIGHT);
  currentTheme$: Observable<Theme> = this.currentTheme.asObservable();

  constructor() {}

  toggleTheme(theme: Theme) {
    this.currentTheme.next(theme);
  }
}
