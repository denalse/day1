import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day30';
  count = 0;
  image = "";

  imageClicked($event: string) {
    console.info(">>>>app.component: image clicked", $event)
    this.count++;
    this.image = $event;
  }
}
