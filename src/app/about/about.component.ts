import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
