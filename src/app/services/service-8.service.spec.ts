import { TestBed, inject } from '@angular/core/testing';

import { Service8Service } from './service-8.service';

describe('Service8Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service8Service]
    });
  });

  it('should ...', inject([Service8Service], (service: Service8Service) => {
    expect(service).toBeTruthy();
  }));
});
