import { TestBed, inject } from '@angular/core/testing';

import { Service561Service } from './service-561.service';

describe('Service561Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service561Service]
    });
  });

  it('should ...', inject([Service561Service], (service: Service561Service) => {
    expect(service).toBeTruthy();
  }));
});
