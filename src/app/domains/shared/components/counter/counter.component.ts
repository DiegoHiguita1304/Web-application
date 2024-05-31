import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //No ASYNC
    // Before render
    //Initializations of variables
    //One time execution
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //Before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && !duration.firstChange) {
      this.doSomething();
    }
      
  }

  ngOnInit() {
    //After render
    // one time execution
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('maessage =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1);
    }, 1000);
  }

  ngAffterViewInit() {
    //After render
    // hijos ya fueron renderizados
    console.log('ngAffterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //Before destroy
    //Clean up
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    if (this.counterRef) {
      window.clearInterval(this.counterRef);
    }
  }

  doSomething() {
  console.log('Duration has changed')
  //Async
  }

}
