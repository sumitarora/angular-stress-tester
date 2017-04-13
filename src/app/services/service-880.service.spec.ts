import { TestBed, inject } from '@angular/core/testing';

import { Service880Service } from './service-880.service';

describe('Service880Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service880Service]
    });
  });

  it('should ...', inject([Service880Service], (service: Service880Service) => {
    expect(service).toBeTruthy();
  }));
});
