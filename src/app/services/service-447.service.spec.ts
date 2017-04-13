import { TestBed, inject } from '@angular/core/testing';

import { Service447Service } from './service-447.service';

describe('Service447Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service447Service]
    });
  });

  it('should ...', inject([Service447Service], (service: Service447Service) => {
    expect(service).toBeTruthy();
  }));
});
