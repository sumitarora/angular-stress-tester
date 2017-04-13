import { TestBed, inject } from '@angular/core/testing';

import { Service311Service } from './service-311.service';

describe('Service311Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service311Service]
    });
  });

  it('should ...', inject([Service311Service], (service: Service311Service) => {
    expect(service).toBeTruthy();
  }));
});
