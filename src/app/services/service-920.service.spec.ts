import { TestBed, inject } from '@angular/core/testing';

import { Service920Service } from './service-920.service';

describe('Service920Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service920Service]
    });
  });

  it('should ...', inject([Service920Service], (service: Service920Service) => {
    expect(service).toBeTruthy();
  }));
});
