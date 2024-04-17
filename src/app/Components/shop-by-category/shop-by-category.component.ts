import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent {
  productArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
  products: string[] = ['Top Selling','Trending Products','Recently added','Top Rated'];
}
