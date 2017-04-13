import { TestBed, inject } from '@angular/core/testing';

import { Service344Service } from './service-344.service';

describe('Service344Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service344Service]
    });
  });

  it('should ...', inject([Service344Service], (service: Service344Service) => {
    expect(service).toBeTruthy();
  }));
});
