import { TestBed, inject } from '@angular/core/testing';

import { Service107Service } from './service-107.service';

describe('Service107Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service107Service]
    });
  });

  it('should ...', inject([Service107Service], (service: Service107Service) => {
    expect(service).toBeTruthy();
  }));
});
