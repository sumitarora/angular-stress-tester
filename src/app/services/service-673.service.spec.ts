import { TestBed, inject } from '@angular/core/testing';

import { Service673Service } from './service-673.service';

describe('Service673Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service673Service]
    });
  });

  it('should ...', inject([Service673Service], (service: Service673Service) => {
    expect(service).toBeTruthy();
  }));
});
