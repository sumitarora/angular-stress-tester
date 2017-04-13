import { TestBed, inject } from '@angular/core/testing';

import { Service181Service } from './service-181.service';

describe('Service181Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service181Service]
    });
  });

  it('should ...', inject([Service181Service], (service: Service181Service) => {
    expect(service).toBeTruthy();
  }));
});
