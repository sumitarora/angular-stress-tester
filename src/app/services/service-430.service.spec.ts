import { TestBed, inject } from '@angular/core/testing';

import { Service430Service } from './service-430.service';

describe('Service430Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service430Service]
    });
  });

  it('should ...', inject([Service430Service], (service: Service430Service) => {
    expect(service).toBeTruthy();
  }));
});
