import { TestBed, inject } from '@angular/core/testing';

import { Service491Service } from './service-491.service';

describe('Service491Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service491Service]
    });
  });

  it('should ...', inject([Service491Service], (service: Service491Service) => {
    expect(service).toBeTruthy();
  }));
});
