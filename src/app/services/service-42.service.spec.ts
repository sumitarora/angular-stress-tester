import { TestBed, inject } from '@angular/core/testing';

import { Service42Service } from './service-42.service';

describe('Service42Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service42Service]
    });
  });

  it('should ...', inject([Service42Service], (service: Service42Service) => {
    expect(service).toBeTruthy();
  }));
});
