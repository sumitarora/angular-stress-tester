import { TestBed, inject } from '@angular/core/testing';

import { Service44Service } from './service-44.service';

describe('Service44Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service44Service]
    });
  });

  it('should ...', inject([Service44Service], (service: Service44Service) => {
    expect(service).toBeTruthy();
  }));
});
