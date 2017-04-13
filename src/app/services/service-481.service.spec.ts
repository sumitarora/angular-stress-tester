import { TestBed, inject } from '@angular/core/testing';

import { Service481Service } from './service-481.service';

describe('Service481Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service481Service]
    });
  });

  it('should ...', inject([Service481Service], (service: Service481Service) => {
    expect(service).toBeTruthy();
  }));
});
