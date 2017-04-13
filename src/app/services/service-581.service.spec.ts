import { TestBed, inject } from '@angular/core/testing';

import { Service581Service } from './service-581.service';

describe('Service581Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service581Service]
    });
  });

  it('should ...', inject([Service581Service], (service: Service581Service) => {
    expect(service).toBeTruthy();
  }));
});
