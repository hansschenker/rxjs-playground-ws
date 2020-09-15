import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-carousel',
  template: `
    <p>
      carousel works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
