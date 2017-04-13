import { TestBed, inject } from '@angular/core/testing';

import { Service281Service } from './service-281.service';

describe('Service281Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service281Service]
    });
  });

  it('should ...', inject([Service281Service], (service: Service281Service) => {
    expect(service).toBeTruthy();
  }));
});
