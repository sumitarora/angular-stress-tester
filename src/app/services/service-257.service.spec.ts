import { TestBed, inject } from '@angular/core/testing';

import { Service257Service } from './service-257.service';

describe('Service257Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service257Service]
    });
  });

  it('should ...', inject([Service257Service], (service: Service257Service) => {
    expect(service).toBeTruthy();
  }));
});
