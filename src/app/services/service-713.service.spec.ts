import { TestBed, inject } from '@angular/core/testing';

import { Service713Service } from './service-713.service';

describe('Service713Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service713Service]
    });
  });

  it('should ...', inject([Service713Service], (service: Service713Service) => {
    expect(service).toBeTruthy();
  }));
});
