import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service'
import { Book } from '../../models/book.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submitted: boolean = false;

  book: Book  = {
    title: '',
    author: '',
    publishedDate: '',
    available: '',
    checkOutBy: ''
  }

  constructor(private bookServices: BookServiceService) { }

  ngOnInit(): void {
  }

  saveBook(): void {
    const data = {
      title: this.book.title,
      author: this.book.author,
      publishedDate: this.book.publishedDate,
      available: this.book.available,
      checkOutBy: this.book.checkOutBy
    };

    this.bookServices.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.book.title
        },
        error: (e) => console.error(e)
      });
  }


  newTutorial(): void {
    this.book = {
      title: '',
      author: '',
      publishedDate: '',
      available: '',
      checkOutBy: ''

    };
  }

}
