import { TestBed, inject } from '@angular/core/testing';

import { Service58Service } from './service-58.service';

describe('Service58Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service58Service]
    });
  });

  it('should ...', inject([Service58Service], (service: Service58Service) => {
    expect(service).toBeTruthy();
  }));
});
