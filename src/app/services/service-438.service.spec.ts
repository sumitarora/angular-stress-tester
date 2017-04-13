import { TestBed, inject } from '@angular/core/testing';

import { Service438Service } from './service-438.service';

describe('Service438Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service438Service]
    });
  });

  it('should ...', inject([Service438Service], (service: Service438Service) => {
    expect(service).toBeTruthy();
  }));
});
