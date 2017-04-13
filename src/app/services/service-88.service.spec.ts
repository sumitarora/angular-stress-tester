import { TestBed, inject } from '@angular/core/testing';

import { Service88Service } from './service-88.service';

describe('Service88Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service88Service]
    });
  });

  it('should ...', inject([Service88Service], (service: Service88Service) => {
    expect(service).toBeTruthy();
  }));
});
