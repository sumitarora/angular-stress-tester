import { TestBed, inject } from '@angular/core/testing';

import { Service427Service } from './service-427.service';

describe('Service427Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service427Service]
    });
  });

  it('should ...', inject([Service427Service], (service: Service427Service) => {
    expect(service).toBeTruthy();
  }));
});
