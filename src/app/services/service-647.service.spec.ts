import { TestBed, inject } from '@angular/core/testing';

import { Service647Service } from './service-647.service';

describe('Service647Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service647Service]
    });
  });

  it('should ...', inject([Service647Service], (service: Service647Service) => {
    expect(service).toBeTruthy();
  }));
});
