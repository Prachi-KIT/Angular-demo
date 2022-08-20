import { TestBed } from '@angular/core/testing';

import { ManageShoppingService } from './manage-shopping.service';

describe('ManageShoppingService', () => {
  let service: ManageShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageShoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
