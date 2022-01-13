import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model'

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  constructor() { }

  @Input() booksArray!: Book[];

  ids: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
  myId = "mycurretnasx"

  ngOnInit(): void {
  }

}
