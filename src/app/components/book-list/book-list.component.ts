import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private router: Router, private bookService: BooksService) { }

  books = [];
  ngOnInit() {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data;
    });
  }

  navigate(route: string) {

  }

}
