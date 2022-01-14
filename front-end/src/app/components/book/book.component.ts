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
  bookIds: string[] = [];
  searchValue: string = '';
  booksLength: number = this.books.length;
  noOfBooksIndentifier: string = '';
  isCurrentBookUpdated: boolean = false;

  currentBook: Book = {
    title: '',
    author: '',
    publishedDate: '',
    available: '',
    checkOutBy: '',
  };

  bookToBeUpdated: Book = {
    _id: '',
    title: '',
    author: '',
    publishedDate: '',
    available: '',
    checkOutBy: ''
  }

  selected: string = ""
  currentBookId: any = "";

  constructor(private bookService: BookServiceService) {}

  // GET DATA OF THE BOOK TO BE UPDATED
  getDataAndUpdate(i:any) {
    this.bookService.get(this.bookIds[i]).subscribe((data) => {
        this.bookToBeUpdated = data

        if(this.bookToBeUpdated.available.length !== 0){
          this.currentBookId = this.bookToBeUpdated._id
        }
        console.log(this.bookToBeUpdated)
    })

  }

  // UPDATE THE SELECTED BOOK
  updateNow(x:string, y: Book) {
          this.bookService.update(x, y).subscribe((data) => {
              this.isCurrentBookUpdated = true
          })
  }

 // DELETE ALL THE BOOKS
  deleteBook(i: any){
      this.bookService.delete(this.bookIds[i]).subscribe(() => {
      })
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
      this.books.forEach((book) => {
        if(book._id){
          this.bookIds.push(book._id)
        }   
      })

    });
  }

  searchBooks(title: string){

    this.bookService.findByTitle(title).subscribe((data) => {
      this.books = data
      this.noOfBooksIndentifier = this.booksLength.valueOf()  > 1 ? 'Book' : 'Books';
    })


  }

  refreshComponent(){
    window.location.reload();
 }

  
}
