import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyChartComponent } from './key-chart.component';

describe('KeyChartComponent', () => {
  let component: KeyChartComponent;
  let fixture: ComponentFixture<KeyChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyChartComponent]
    });
    fixture = TestBed.createComponent(KeyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
