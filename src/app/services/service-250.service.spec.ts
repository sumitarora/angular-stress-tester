import { TestBed, inject } from '@angular/core/testing';

import { Service250Service } from './service-250.service';

describe('Service250Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service250Service]
    });
  });

  it('should ...', inject([Service250Service], (service: Service250Service) => {
    expect(service).toBeTruthy();
  }));
});
