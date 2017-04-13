import { TestBed, inject } from '@angular/core/testing';

import { Service584Service } from './service-584.service';

describe('Service584Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service584Service]
    });
  });

  it('should ...', inject([Service584Service], (service: Service584Service) => {
    expect(service).toBeTruthy();
  }));
});
