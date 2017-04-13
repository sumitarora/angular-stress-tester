import { TestBed, inject } from '@angular/core/testing';

import { Service699Service } from './service-699.service';

describe('Service699Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service699Service]
    });
  });

  it('should ...', inject([Service699Service], (service: Service699Service) => {
    expect(service).toBeTruthy();
  }));
});
