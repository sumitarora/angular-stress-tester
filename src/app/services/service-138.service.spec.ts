import { TestBed, inject } from '@angular/core/testing';

import { Service138Service } from './service-138.service';

describe('Service138Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service138Service]
    });
  });

  it('should ...', inject([Service138Service], (service: Service138Service) => {
    expect(service).toBeTruthy();
  }));
});
