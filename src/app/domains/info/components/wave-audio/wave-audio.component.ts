// wave-audio.component.ts
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  templateUrl: './wave-audio.component.html',
  styleUrls: ['./wave-audio.component.css']
})
export class WaveAudioComponent {
  @Input() audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;

  isPlaying: boolean = false;

  ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      container: this.container.nativeElement
    });
    this.ws.load(this.audioUrl);

    this.ws.on('play', () => this.isPlaying = true);
    this.ws.on('pause', () => this.isPlaying = false);
  }

  playPause() {
    if (this.ws.isPlaying()) {
      this.ws.pause();
    } else {
      this.ws.play();
    }
  }
}
