import { TestBed, inject } from '@angular/core/testing';

import { Service422Service } from './service-422.service';

describe('Service422Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service422Service]
    });
  });

  it('should ...', inject([Service422Service], (service: Service422Service) => {
    expect(service).toBeTruthy();
  }));
});
