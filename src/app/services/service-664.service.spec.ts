import { TestBed, inject } from '@angular/core/testing';

import { Service664Service } from './service-664.service';

describe('Service664Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service664Service]
    });
  });

  it('should ...', inject([Service664Service], (service: Service664Service) => {
    expect(service).toBeTruthy();
  }));
});
