import { TestBed, inject } from '@angular/core/testing';

import { Service944Service } from './service-944.service';

describe('Service944Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service944Service]
    });
  });

  it('should ...', inject([Service944Service], (service: Service944Service) => {
    expect(service).toBeTruthy();
  }));
});
