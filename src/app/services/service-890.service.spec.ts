import { TestBed, inject } from '@angular/core/testing';

import { Service890Service } from './service-890.service';

describe('Service890Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service890Service]
    });
  });

  it('should ...', inject([Service890Service], (service: Service890Service) => {
    expect(service).toBeTruthy();
  }));
});
