import { TestBed, inject } from '@angular/core/testing';

import { Service979Service } from './service-979.service';

describe('Service979Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service979Service]
    });
  });

  it('should ...', inject([Service979Service], (service: Service979Service) => {
    expect(service).toBeTruthy();
  }));
});
