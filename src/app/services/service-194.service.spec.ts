import { TestBed, inject } from '@angular/core/testing';

import { Service194Service } from './service-194.service';

describe('Service194Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service194Service]
    });
  });

  it('should ...', inject([Service194Service], (service: Service194Service) => {
    expect(service).toBeTruthy();
  }));
});
