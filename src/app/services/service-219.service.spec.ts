import { TestBed, inject } from '@angular/core/testing';

import { Service219Service } from './service-219.service';

describe('Service219Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service219Service]
    });
  });

  it('should ...', inject([Service219Service], (service: Service219Service) => {
    expect(service).toBeTruthy();
  }));
});
