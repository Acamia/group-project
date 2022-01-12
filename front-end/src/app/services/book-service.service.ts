import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/book.model";

const baseUrl = "http://localhost:8080/api/books";

@Injectable({
  providedIn: 'root'
})


export class BookServiceService {

  constructor(private http: HttpClient) { }


  // RETRIEVE ALL THE BOOKS
  getAllBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(baseUrl)
  }

  // GET A SINGLE BOOK
  get(id: any): Observable<Book> {
    return this.http.get<Book>(`${baseUrl}/${id}`)
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

  deleteAll() : Observable<any> {
    return this.http.delete(baseUrl)
  }

  findByTitle(title: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${baseUrl}?title=${title}`)
  }

}
