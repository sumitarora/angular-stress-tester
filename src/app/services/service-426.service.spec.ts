import { TestBed, inject } from '@angular/core/testing';

import { Service426Service } from './service-426.service';

describe('Service426Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service426Service]
    });
  });

  it('should ...', inject([Service426Service], (service: Service426Service) => {
    expect(service).toBeTruthy();
  }));
});
