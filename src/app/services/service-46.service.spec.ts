import { TestBed, inject } from '@angular/core/testing';

import { Service46Service } from './service-46.service';

describe('Service46Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service46Service]
    });
  });

  it('should ...', inject([Service46Service], (service: Service46Service) => {
    expect(service).toBeTruthy();
  }));
});
