import { TestBed, inject } from '@angular/core/testing';

import { Service806Service } from './service-806.service';

describe('Service806Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service806Service]
    });
  });

  it('should ...', inject([Service806Service], (service: Service806Service) => {
    expect(service).toBeTruthy();
  }));
});
