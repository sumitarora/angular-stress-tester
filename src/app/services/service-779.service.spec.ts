import { TestBed, inject } from '@angular/core/testing';

import { Service779Service } from './service-779.service';

describe('Service779Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service779Service]
    });
  });

  it('should ...', inject([Service779Service], (service: Service779Service) => {
    expect(service).toBeTruthy();
  }));
});
