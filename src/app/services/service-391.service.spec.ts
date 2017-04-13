import { TestBed, inject } from '@angular/core/testing';

import { Service391Service } from './service-391.service';

describe('Service391Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service391Service]
    });
  });

  it('should ...', inject([Service391Service], (service: Service391Service) => {
    expect(service).toBeTruthy();
  }));
});
