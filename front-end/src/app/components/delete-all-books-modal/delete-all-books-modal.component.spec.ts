import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllBooksModalComponent } from './delete-all-books-modal.component';

describe('DeleteAllBooksModalComponent', () => {
  let component: DeleteAllBooksModalComponent;
  let fixture: ComponentFixture<DeleteAllBooksModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllBooksModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllBooksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
