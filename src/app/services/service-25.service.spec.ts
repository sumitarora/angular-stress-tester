import { TestBed, inject } from '@angular/core/testing';

import { Service25Service } from './service-25.service';

describe('Service25Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service25Service]
    });
  });

  it('should ...', inject([Service25Service], (service: Service25Service) => {
    expect(service).toBeTruthy();
  }));
});
