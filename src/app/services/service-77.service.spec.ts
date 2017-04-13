import { TestBed, inject } from '@angular/core/testing';

import { Service77Service } from './service-77.service';

describe('Service77Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service77Service]
    });
  });

  it('should ...', inject([Service77Service], (service: Service77Service) => {
    expect(service).toBeTruthy();
  }));
});
