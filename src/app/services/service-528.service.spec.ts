import { TestBed, inject } from '@angular/core/testing';

import { Service528Service } from './service-528.service';

describe('Service528Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service528Service]
    });
  });

  it('should ...', inject([Service528Service], (service: Service528Service) => {
    expect(service).toBeTruthy();
  }));
});
