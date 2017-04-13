import { TestBed, inject } from '@angular/core/testing';

import { Service873Service } from './service-873.service';

describe('Service873Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service873Service]
    });
  });

  it('should ...', inject([Service873Service], (service: Service873Service) => {
    expect(service).toBeTruthy();
  }));
});
