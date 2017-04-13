import { TestBed, inject } from '@angular/core/testing';

import { Service117Service } from './service-117.service';

describe('Service117Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service117Service]
    });
  });

  it('should ...', inject([Service117Service], (service: Service117Service) => {
    expect(service).toBeTruthy();
  }));
});
