import { TestBed, inject } from '@angular/core/testing';

import { Service205Service } from './service-205.service';

describe('Service205Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service205Service]
    });
  });

  it('should ...', inject([Service205Service], (service: Service205Service) => {
    expect(service).toBeTruthy();
  }));
});
