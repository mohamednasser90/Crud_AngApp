import { TestBed } from '@angular/core/testing';

import { UserSeriveService } from './user-serive.service';

describe('UserSeriveService', () => {
  let service: UserSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
