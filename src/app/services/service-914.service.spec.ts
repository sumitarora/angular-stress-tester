import { TestBed, inject } from '@angular/core/testing';

import { Service914Service } from './service-914.service';

describe('Service914Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service914Service]
    });
  });

  it('should ...', inject([Service914Service], (service: Service914Service) => {
    expect(service).toBeTruthy();
  }));
});
