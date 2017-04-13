import { TestBed, inject } from '@angular/core/testing';

import { Service896Service } from './service-896.service';

describe('Service896Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service896Service]
    });
  });

  it('should ...', inject([Service896Service], (service: Service896Service) => {
    expect(service).toBeTruthy();
  }));
});
