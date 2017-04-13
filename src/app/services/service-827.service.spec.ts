import { TestBed, inject } from '@angular/core/testing';

import { Service827Service } from './service-827.service';

describe('Service827Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service827Service]
    });
  });

  it('should ...', inject([Service827Service], (service: Service827Service) => {
    expect(service).toBeTruthy();
  }));
});
