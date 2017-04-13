import { TestBed, inject } from '@angular/core/testing';

import { Service461Service } from './service-461.service';

describe('Service461Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service461Service]
    });
  });

  it('should ...', inject([Service461Service], (service: Service461Service) => {
    expect(service).toBeTruthy();
  }));
});
