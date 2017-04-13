import { TestBed, inject } from '@angular/core/testing';

import { Service200Service } from './service-200.service';

describe('Service200Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service200Service]
    });
  });

  it('should ...', inject([Service200Service], (service: Service200Service) => {
    expect(service).toBeTruthy();
  }));
});
