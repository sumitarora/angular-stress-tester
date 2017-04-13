import { TestBed, inject } from '@angular/core/testing';

import { Service625Service } from './service-625.service';

describe('Service625Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service625Service]
    });
  });

  it('should ...', inject([Service625Service], (service: Service625Service) => {
    expect(service).toBeTruthy();
  }));
});
