import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { OnInit } from '@angular/core/src/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class AppComponent implements OnInit {
  public display = 'none';
  images = [
    {
      src: 'https://www.w3schools.com/w3css/img_rr_01.jpg',
      anim: 'rubberBand',
    },
    {
      src: 'https://www.w3schools.com/w3css/img_rr_02.jpg',
      anim: 'slideInLeft',
    },
    { src: 'https://www.w3schools.com/w3css/img_rr_03.jpg', anim: 'zoomIn' },
    {
      src: 'https://www.w3schools.com/w3css/img_rr_04.jpg',
      anim: 'rotateInUpRight',
    },
  ];
  index = 0;

  ngOnInit() {
    setInterval(() => {
      if (this.index === this.images.length - 1) {
        this.index = 0;
      } else {
        this.index = this.index + 1;
      }
    }, 5000);
  }

  toggleDisplay() {
    if (this.display === 'none') {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
