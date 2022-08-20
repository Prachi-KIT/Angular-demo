import { TestBed } from '@angular/core/testing';

import { ReceipeandshoppingService } from './receipeandshopping.service';

describe('ReceipeandshoppingService', () => {
  let service: ReceipeandshoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipeandshoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
