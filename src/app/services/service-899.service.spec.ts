import { TestBed, inject } from '@angular/core/testing';

import { Service899Service } from './service-899.service';

describe('Service899Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service899Service]
    });
  });

  it('should ...', inject([Service899Service], (service: Service899Service) => {
    expect(service).toBeTruthy();
  }));
});
