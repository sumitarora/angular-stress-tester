import { TestBed, inject } from '@angular/core/testing';

import { Service308Service } from './service-308.service';

describe('Service308Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service308Service]
    });
  });

  it('should ...', inject([Service308Service], (service: Service308Service) => {
    expect(service).toBeTruthy();
  }));
});
