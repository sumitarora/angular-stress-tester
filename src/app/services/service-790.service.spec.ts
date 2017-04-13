import { TestBed, inject } from '@angular/core/testing';

import { Service790Service } from './service-790.service';

describe('Service790Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service790Service]
    });
  });

  it('should ...', inject([Service790Service], (service: Service790Service) => {
    expect(service).toBeTruthy();
  }));
});
