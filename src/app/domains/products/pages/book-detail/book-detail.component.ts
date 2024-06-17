// book-detail.component.ts
import { Component, Input } from '@angular/core';
import { BookService } from '@shared/services/book.service';
import { Book } from '@shared/models/book.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class ProductDetailComponent {
  @Input() id?: string;
  product: Book | null = null;
  cover: string = '';

  constructor(private bookService: BookService, private cartService: CartService) {}

  ngOnInit() {
    if (this.id) {
      this.bookService.getOne(this.id)
        .subscribe({
          next: (book) => {
            this.product = book;
            if (book.images.length > 0) {
              this.cover = book.images[0];
            }
          }
        });
    }
  }

  changeCover(newImg: string) {
    this.cover = newImg;
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}
