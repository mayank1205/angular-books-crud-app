import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { BooksService } from "src/app/services/books.service";
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"],
})
export class BookListComponent implements OnInit {
  constructor(private router: Router, private bookService: BooksService) {}

  books = [];
  booksCount = 0;
  currentBookId;
  editBook: Subject<number>;
  ngOnInit() {
    this.getBooks();
    this.editBook = new BehaviorSubject(null);
  }

  callGetBooks() {
    console.log('call getbooks called?')
    this.getBooks();
  }

  getBooks() {
    console.log('getbooks called?')
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data.data;
      this.booksCount = data.count;
    });
  }

  setCurrentBook(id) {
    console.log(id);
    this.currentBookId = id;
    this.editBook.next(this.currentBookId);
  }

  deleteCurrentBook() {
    console.log("gets called?");
    this.bookService.deleteBook(this.currentBookId).subscribe((data: any) => {
      if (data.success) {
        this.books = data.data;
      } else {
      }
    });
  }

  navigate(route: string) {}
}
