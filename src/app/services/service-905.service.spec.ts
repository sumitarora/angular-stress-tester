import { TestBed, inject } from '@angular/core/testing';

import { Service905Service } from './service-905.service';

describe('Service905Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service905Service]
    });
  });

  it('should ...', inject([Service905Service], (service: Service905Service) => {
    expect(service).toBeTruthy();
  }));
});
