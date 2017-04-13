import { TestBed, inject } from '@angular/core/testing';

import { Service68Service } from './service-68.service';

describe('Service68Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service68Service]
    });
  });

  it('should ...', inject([Service68Service], (service: Service68Service) => {
    expect(service).toBeTruthy();
  }));
});
