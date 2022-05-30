import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  products: any[] = [];
  sortOptions: any[] = [];
  sortOrder = -1;
  displayType = true;
  grid = 'col-lg-3 col-md-3 col-xl-3 col-sm-6 col-12';
  list = 'col-lg-6 col-md-6 col-xl-6 col-sm-6 col-12';

  constructor(private productsService: ProductsService, private meta: Meta) {}

  ngOnInit(): void {
    this.getProducts();
    this.sortOptions = [
      { label: 'Price Low to High', value: true },
      { label: 'Price High to Low', value: false },
    ];
    this.addTags();
  }

  addTags() {
    this.meta.addTag({
      name: 'description',
      content: 'This is a listing page of products',
    });
  }
  /**
   * @author Kranthi kumar Reddy
   * @param {boolean} bool
   * @param {any[]} value
   * @method To sort list
   * @memberof ListingComponent
   */

  getSortedProducts(bool: boolean, value: any[]): void {
    this.products =
      bool == true
        ? [...value.sort((a, b) => a.price - b.price)].slice()
        : [...value.sort((a, b) => b.price - a.price)].slice();
  }

  /**
   * @author Kranthi kumar Reddy
   * @method To get products
   * @memberof ListingComponent
   */
  getProducts() {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data.data;
      this.getSortedProducts(true, this.products);
    });
  }

  /**
   * @author Kranthi kumar Reddy
   * @method To change sort type
   * @param {*} event
   * @memberof ListingComponent
   */

  onSortChange(event: any) {
    let value = event.target.value;
    if (value == 'true') {
      this.getSortedProducts(true, this.products);
    } else {
      this.getSortedProducts(false, this.products);
    }
  }

  /**
   * @author Kranthi kumar Reddy
   * @method To change display type
   * @param {string} value
   * @memberof ListingComponent
   */
  changeDisplayType(value: string) {
    if (value == 'grid') this.displayType = true;
    else this.displayType = false;
  }
}
