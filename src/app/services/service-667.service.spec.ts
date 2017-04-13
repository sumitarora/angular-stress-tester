import { TestBed, inject } from '@angular/core/testing';

import { Service667Service } from './service-667.service';

describe('Service667Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service667Service]
    });
  });

  it('should ...', inject([Service667Service], (service: Service667Service) => {
    expect(service).toBeTruthy();
  }));
});
