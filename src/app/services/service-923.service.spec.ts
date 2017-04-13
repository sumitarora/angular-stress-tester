import { TestBed, inject } from '@angular/core/testing';

import { Service923Service } from './service-923.service';

describe('Service923Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service923Service]
    });
  });

  it('should ...', inject([Service923Service], (service: Service923Service) => {
    expect(service).toBeTruthy();
  }));
});
