import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input()
  image = "assets/pikachu_0.jpg"

  @Input()
  caption = "Pikachu baby"

  @Output()
  clicked = new Subject<string>;
  


  // image = "/assets/pikachu_0.jpg"
  // caption = "My Sticker"
  addToCart = true
  fontsize = "1.5em"

  private count = 0

  constructor() { }

  ngOnInit(): void { }

  enter() {
    // console.info('cursor is in the image')
    this.fontsize ="2em"
    this.addToCart = false
  }

  exit() {
    // console.info('cursor is in the image')
    this.fontsize = "1em"
    this.addToCart = true
  }

  process() {
    if (this.count == 2){
      this.count = 0;
    } else {
      this.count++;
    }
    this.image = `/assets/pikachu_${this.count}.jpg`
    // // console.info('cursor is clicking on image')
    console.info("button click")
    // <-Send the notification out
    this.clicked.next(this.image)

  }

}
