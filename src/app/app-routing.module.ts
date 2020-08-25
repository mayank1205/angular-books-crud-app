import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [{
  path: '',
  component: BookListComponent,
},{
  path: 'add',
  component: AddBookComponent
},{
  path: 'edit',
  component: EditBookComponent,
},{
  path: 'details',
  component: BookDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
