import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { DeleteAllBooksModalComponent } from './components/delete-all-books-modal/delete-all-books-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    TableRowComponent,
    DeleteAllBooksModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
