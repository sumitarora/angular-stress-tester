import { TestBed, inject } from '@angular/core/testing';

import { Service733Service } from './service-733.service';

describe('Service733Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service733Service]
    });
  });

  it('should ...', inject([Service733Service], (service: Service733Service) => {
    expect(service).toBeTruthy();
  }));
});
