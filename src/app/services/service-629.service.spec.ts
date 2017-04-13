import { TestBed, inject } from '@angular/core/testing';

import { Service629Service } from './service-629.service';

describe('Service629Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service629Service]
    });
  });

  it('should ...', inject([Service629Service], (service: Service629Service) => {
    expect(service).toBeTruthy();
  }));
});
