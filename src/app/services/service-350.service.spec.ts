import { TestBed, inject } from '@angular/core/testing';

import { Service350Service } from './service-350.service';

describe('Service350Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service350Service]
    });
  });

  it('should ...', inject([Service350Service], (service: Service350Service) => {
    expect(service).toBeTruthy();
  }));
});
