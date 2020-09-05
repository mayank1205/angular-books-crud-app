import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  bookId: number;
  @Input() bookDetails: Subject<number>;
  book: any;
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBook(this.bookId).subscribe((res: any) => {
      this.book = res.data;
    });
    this.bookDetails.subscribe(id => {
      console.log(id)
      this.booksService.getBook(id).subscribe((res: any) => {
        console.log(res)
        this.book = res.data;
      })
    })
  }

}
