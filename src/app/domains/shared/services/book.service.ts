import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Book } from '../models/book.models';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private http = inject(HttpClient);

  constructor() { }

  getBook(category_id?: string) {
    const url = new URL(``);
    if (category_id) {
      url.searchParams.set('categoryId', category_id)
    }
    return this.http.get<Book[]>(url.toString());
  }

  getOne(id: string) {
    return this.http.get<Book>(`${id}`);
  }
}