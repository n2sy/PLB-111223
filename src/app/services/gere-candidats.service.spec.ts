import { TestBed } from '@angular/core/testing';

import { GereCandidatsService } from './gere-candidats.service';

describe('GereCandidatsService', () => {
  let service: GereCandidatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GereCandidatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
