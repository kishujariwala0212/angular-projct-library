import { TestBed } from '@angular/core/testing';

import { BooksservicesService } from './booksservices.service';

describe('BooksservicesService', () => {
  let service: BooksservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
