import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-delete-all-books-modal',
  templateUrl: './delete-all-books-modal.component.html',
  styleUrls: ['./delete-all-books-modal.component.css']
})
export class DeleteAllBooksModalComponent implements OnInit {

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
  }

  deleteAllBooks() {
      this.bookService.deleteAll().subscribe(() => {
        // console.log('All the books are deleted')
        location.reload()
      })
  }

}
