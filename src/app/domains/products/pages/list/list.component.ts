// list.component.ts
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '@shared/services/cart.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { BookService } from '@shared/services/book.service';
import { Book } from '@shared/models/book.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() categoryId?: string;
  books: Book[] = [];
  categories: Category[] = [];

  constructor(private cartService: CartService, private bookService: BookService, private categoryService: CategoryService) {}

  ngOnInit() {
    this.getCategories();
    this.getBooks();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.categoryId) {
      this.getBooks();
    }
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

  private getBooks() {
    this.bookService.getBooks(this.categoryId)
      .subscribe({
        next: (books) => {
          this.books = books;
        },
        error: () => {
          // Manejar errores
        }
      });
  }

  private getCategories() {
    this.categoryService.getAll()
      .subscribe({
        next: (categories) => {
          this.categories = categories;
        },
        error: () => {
          // Manejar errores
        }
      });
  }
}
