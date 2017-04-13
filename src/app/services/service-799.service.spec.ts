import { TestBed, inject } from '@angular/core/testing';

import { Service799Service } from './service-799.service';

describe('Service799Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service799Service]
    });
  });

  it('should ...', inject([Service799Service], (service: Service799Service) => {
    expect(service).toBeTruthy();
  }));
});
