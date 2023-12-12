import { TestBed } from '@angular/core/testing';

import { GererRecruesService } from './gerer-recrues.service';

describe('GererRecruesService', () => {
  let service: GererRecruesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GererRecruesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
