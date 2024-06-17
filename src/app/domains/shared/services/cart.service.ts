import { Injectable, computed, signal } from '@angular/core';
import { Book } from '../models/book.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Book[]>([])
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  addToCart(product: Book) {
    this.cart.update(state => [...state, product]);
  }
}