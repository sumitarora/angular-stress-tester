import { TestBed, inject } from '@angular/core/testing';

import { Service879Service } from './service-879.service';

describe('Service879Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service879Service]
    });
  });

  it('should ...', inject([Service879Service], (service: Service879Service) => {
    expect(service).toBeTruthy();
  }));
});
