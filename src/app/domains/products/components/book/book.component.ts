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
  // Tu código aquí
}
