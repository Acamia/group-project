import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  currentBook: Book = {
    title: '',
    author: '',
    publishedDate: '',
    available: '',
    checkOutBy: '',
  };


  constructor(private bookService: BookServiceService) {}

  getDataAndUpdate() {
    console.log('clicked');
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
      console.log(this.books);
    });
  }
}
