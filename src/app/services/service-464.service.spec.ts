import { TestBed, inject } from '@angular/core/testing';

import { Service464Service } from './service-464.service';

describe('Service464Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service464Service]
    });
  });

  it('should ...', inject([Service464Service], (service: Service464Service) => {
    expect(service).toBeTruthy();
  }));
});
