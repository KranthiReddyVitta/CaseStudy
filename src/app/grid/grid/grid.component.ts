import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SortDirective, SortEvent } from '../sort.directive';

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @ViewChildren(SortDirective)
  headers!: QueryList<SortDirective>;

  countries: any[] = [
    {
      Name: 'Ram',
      Class: 3,
      Section: 'D',
      Sub1: 21,
      Sub2: 24,
      Sub3: 27,
    },
    {
      Name: 'John',
      Class: 4,
      Section: 'A',
      Sub1: 25,
      Sub2: 21,
      Sub3: 27,
    },
    {
      Name: 'Kiran',
      Class: 2,
      Section: 'B',
      Sub1: 30,
      Sub2: 41,
      Sub3: 57,
    },
  ];

  list = this.countries.slice();

  constructor(private meta: Meta) {}

  ngOnInit() {
    this.addTags();
  }

  addTags() {
    this.meta.addTag({
      name: 'description',
      content: 'Sortable table',
    });
  }



  /**
   * @author kranthi kumar reddy
   * @method To sort data
   * @param {SortEvent} { column, direction }
   * @memberof GridComponent
   */
  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header: any) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '' || column === '') {
      this.list = this.countries.slice();
    } else {
      this.list = [...this.countries].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
