import { TestBed, inject } from '@angular/core/testing';

import { Service729Service } from './service-729.service';

describe('Service729Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service729Service]
    });
  });

  it('should ...', inject([Service729Service], (service: Service729Service) => {
    expect(service).toBeTruthy();
  }));
});
