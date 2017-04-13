import { TestBed, inject } from '@angular/core/testing';

import { Service583Service } from './service-583.service';

describe('Service583Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service583Service]
    });
  });

  it('should ...', inject([Service583Service], (service: Service583Service) => {
    expect(service).toBeTruthy();
  }));
});
