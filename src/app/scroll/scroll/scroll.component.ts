import { Component, HostListener, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent implements OnInit {
  elements = [1, 2, 3, 4];
  count = 4;
  constructor(private meta:Meta) {}

  ngOnInit() {
    this.addTags()
  }

  addTags() {
    this.meta.addTag({
      name: 'description',
      content: 'Scroll div',
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.elements = [...this.elements, this.count++];
    }
  }

  bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  alertButton(value: any) {
    window.alert(`Button ${value} clicked`);
  }
}
