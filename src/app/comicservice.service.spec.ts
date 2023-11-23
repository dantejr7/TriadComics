import { TestBed } from '@angular/core/testing';

import { ComicserviceService } from './comicservice.service';

describe('ComicserviceService', () => {
  let service: ComicserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
