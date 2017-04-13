import { TestBed, inject } from '@angular/core/testing';

import { Service96Service } from './service-96.service';

describe('Service96Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service96Service]
    });
  });

  it('should ...', inject([Service96Service], (service: Service96Service) => {
    expect(service).toBeTruthy();
  }));
});
