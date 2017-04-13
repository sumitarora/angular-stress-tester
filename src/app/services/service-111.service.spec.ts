import { TestBed, inject } from '@angular/core/testing';

import { Service111Service } from './service-111.service';

describe('Service111Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service111Service]
    });
  });

  it('should ...', inject([Service111Service], (service: Service111Service) => {
    expect(service).toBeTruthy();
  }));
});
