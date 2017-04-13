import { TestBed, inject } from '@angular/core/testing';

import { Service63Service } from './service-63.service';

describe('Service63Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service63Service]
    });
  });

  it('should ...', inject([Service63Service], (service: Service63Service) => {
    expect(service).toBeTruthy();
  }));
});
