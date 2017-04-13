import { TestBed, inject } from '@angular/core/testing';

import { Service892Service } from './service-892.service';

describe('Service892Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service892Service]
    });
  });

  it('should ...', inject([Service892Service], (service: Service892Service) => {
    expect(service).toBeTruthy();
  }));
});
