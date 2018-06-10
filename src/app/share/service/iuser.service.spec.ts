import { TestBed, inject } from '@angular/core/testing';

import { IuserService } from './iuser.service';

describe('IuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IuserService]
    });
  });

  it('should be created', inject([IuserService], (service: IuserService) => {
    expect(service).toBeTruthy();
  }));
});
