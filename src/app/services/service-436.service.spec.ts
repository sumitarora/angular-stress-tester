import { TestBed, inject } from '@angular/core/testing';

import { Service436Service } from './service-436.service';

describe('Service436Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service436Service]
    });
  });

  it('should ...', inject([Service436Service], (service: Service436Service) => {
    expect(service).toBeTruthy();
  }));
});
