import { TestBed, inject } from '@angular/core/testing';

import { Service596Service } from './service-596.service';

describe('Service596Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service596Service]
    });
  });

  it('should ...', inject([Service596Service], (service: Service596Service) => {
    expect(service).toBeTruthy();
  }));
});
