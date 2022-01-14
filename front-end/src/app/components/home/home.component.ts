import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { Book } from '../../models/book.model';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';

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
    available: 'Available',
    checkOutBy: ''
  }

  constructor(private bookServices: BookServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
          // this.refreshComponent();
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

  refreshComponent(){
    this.router.navigate([this.router.url])
 }

}
