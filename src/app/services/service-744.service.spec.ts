import { TestBed, inject } from '@angular/core/testing';

import { Service744Service } from './service-744.service';

describe('Service744Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service744Service]
    });
  });

  it('should ...', inject([Service744Service], (service: Service744Service) => {
    expect(service).toBeTruthy();
  }));
});
