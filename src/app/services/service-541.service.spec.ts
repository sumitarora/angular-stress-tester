import { TestBed, inject } from '@angular/core/testing';

import { Service541Service } from './service-541.service';

describe('Service541Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service541Service]
    });
  });

  it('should ...', inject([Service541Service], (service: Service541Service) => {
    expect(service).toBeTruthy();
  }));
});
