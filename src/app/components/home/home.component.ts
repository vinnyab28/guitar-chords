import { Component, OnInit } from '@angular/core';

const SEMITONE = 1;
const TONE = 2;

const MAJOR = [
  { interval: TONE, minor: false },
  { interval: TONE, minor: true },
  { interval: SEMITONE, minor: true },
  { interval: TONE, minor: false },
  { interval: TONE, minor: false },
  { interval: TONE, minor: true },
  { interval: SEMITONE, minor: true },
];
const MINOR = [
  { interval: TONE, minor: true },
  { interval: SEMITONE, minor: true },
  { interval: TONE, minor: false },
  { interval: TONE, minor: false },
  { interval: SEMITONE, minor: true },
  { interval: TONE, minor: false },
  { interval: TONE, minor: false },
];

enum TYPES {
  MAJOR = 'Major',
  MINOR = 'Minor',
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transpose: number = 0;

  notes: string[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

  selectedScale: string;
  selectedType: string;
  originalScale: string[] = [];
  transposedScale: string[] = [];

  ngOnInit(): void {
    this.selectedScale = this.notes[0];
    this.selectedType = TYPES.MAJOR;
    this.generateScale();
  }

  increaseTranspose() {
    this.transpose++;
    this.generateScale();
  }

  decreaseTranspose() {
    this.transpose--;
    this.generateScale();
  }

  onChangeScale(scale: string) {
    this.selectedScale = scale;
    this.generateScale();
  }

  generateScale() {
    this.originalScale = [];
    this.transposedScale = [];
    let scale_index = this.notes.findIndex((note) => note === this.selectedScale);
    let transposed_scale_index = scale_index + this.transpose;

    if (this.selectedType === TYPES.MAJOR) {
      for (let i = 0; i < 7; i++) {
        const selected_note = MAJOR[i].minor ? this.notes[scale_index % 12] + 'm' : this.notes[scale_index % 12];
        const transposed_selected_note = MAJOR[i].minor ? this.notes[transposed_scale_index % 12] + 'm' : this.notes[transposed_scale_index % 12];
        this.originalScale.push(selected_note);
        this.transposedScale.push(transposed_selected_note);
        scale_index += MAJOR[i].interval;
        transposed_scale_index += MAJOR[i].interval;
      }
    } else {
      for (let i = 0; i < 7; i++) {
        const selected_note = MINOR[i].minor ? this.notes[scale_index % 12] + 'm' : this.notes[scale_index % 12];
        const transposed_selected_note = MINOR[i].minor ? this.notes[transposed_scale_index % 12] + 'm' : this.notes[transposed_scale_index % 12];
        this.originalScale.push(selected_note);
        this.transposedScale.push(transposed_selected_note);
        scale_index += MINOR[i].interval;
        transposed_scale_index += MINOR[i].interval;
      }
    }
  }
}
