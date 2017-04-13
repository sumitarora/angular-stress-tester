import { TestBed, inject } from '@angular/core/testing';

import { Service696Service } from './service-696.service';

describe('Service696Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service696Service]
    });
  });

  it('should ...', inject([Service696Service], (service: Service696Service) => {
    expect(service).toBeTruthy();
  }));
});
