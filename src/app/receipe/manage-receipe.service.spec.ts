import { TestBed } from '@angular/core/testing';

import { ManageReceipeService } from './manage-receipe.service';

describe('ManageReceipeService', () => {
  let service: ManageReceipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageReceipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
