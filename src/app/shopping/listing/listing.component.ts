import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  products:any[] = [];
  sortOptions:any[] = [];
  sortOrder = -1;
  displayType = true;
  grid = 'col-lg-3 col-md-3 col-xl-3 col-sm-6 col-12';
  list = 'col-lg-6 col-md-6 col-xl-6 col-sm-6 col-12';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.sortOptions = [
      { label: 'Price Low to High', value: true },
      { label: 'Price High to Low', value: false },
    ];
  }

  getSortedProducts(bool: boolean, value: any[]) {
    this.products =
      bool == true
        ? [...value.sort((a, b) => a.price - b.price)].slice()
        : [...value.sort((a, b) => b.price - a.price)].slice();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data.data;
      this.getSortedProducts(true, this.products);
    });
  }

  onSortChange(event: any) {
    let value = event.target.value;
    if (value == "true") {
      this.getSortedProducts(true, this.products);
    } else {
      this.getSortedProducts(false, this.products);
    }
  }

  changeDisplayType(value: string) {
    if (value == 'grid') this.displayType = true;
    else this.displayType = false;
  }
}
