import { TestBed, inject } from '@angular/core/testing';

import { Service185Service } from './service-185.service';

describe('Service185Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service185Service]
    });
  });

  it('should ...', inject([Service185Service], (service: Service185Service) => {
    expect(service).toBeTruthy();
  }));
});
