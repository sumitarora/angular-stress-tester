import { TestBed, inject } from '@angular/core/testing';

import { Service324Service } from './service-324.service';

describe('Service324Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service324Service]
    });
  });

  it('should ...', inject([Service324Service], (service: Service324Service) => {
    expect(service).toBeTruthy();
  }));
});
