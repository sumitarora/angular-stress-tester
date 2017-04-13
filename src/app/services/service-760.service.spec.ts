import { TestBed, inject } from '@angular/core/testing';

import { Service760Service } from './service-760.service';

describe('Service760Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service760Service]
    });
  });

  it('should ...', inject([Service760Service], (service: Service760Service) => {
    expect(service).toBeTruthy();
  }));
});
