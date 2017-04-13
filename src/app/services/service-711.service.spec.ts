import { TestBed, inject } from '@angular/core/testing';

import { Service711Service } from './service-711.service';

describe('Service711Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service711Service]
    });
  });

  it('should ...', inject([Service711Service], (service: Service711Service) => {
    expect(service).toBeTruthy();
  }));
});
