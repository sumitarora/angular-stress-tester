import { TestBed, inject } from '@angular/core/testing';

import { Service771Service } from './service-771.service';

describe('Service771Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service771Service]
    });
  });

  it('should ...', inject([Service771Service], (service: Service771Service) => {
    expect(service).toBeTruthy();
  }));
});
