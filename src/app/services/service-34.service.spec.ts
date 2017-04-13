import { TestBed, inject } from '@angular/core/testing';

import { Service34Service } from './service-34.service';

describe('Service34Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service34Service]
    });
  });

  it('should ...', inject([Service34Service], (service: Service34Service) => {
    expect(service).toBeTruthy();
  }));
});
