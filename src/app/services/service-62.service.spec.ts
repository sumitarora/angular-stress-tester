import { TestBed, inject } from '@angular/core/testing';

import { Service62Service } from './service-62.service';

describe('Service62Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service62Service]
    });
  });

  it('should ...', inject([Service62Service], (service: Service62Service) => {
    expect(service).toBeTruthy();
  }));
});
