import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nest',
  templateUrl: './nest.component.html',
  styleUrls: ['./nest.component.scss'],
})
export class NestComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.addTags();
  }

  addTags() {
    this.meta.addTag({
      name: 'description',
      content: 'Floating banner text',
    });
  }
}
