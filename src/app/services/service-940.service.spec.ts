import { TestBed, inject } from '@angular/core/testing';

import { Service940Service } from './service-940.service';

describe('Service940Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service940Service]
    });
  });

  it('should ...', inject([Service940Service], (service: Service940Service) => {
    expect(service).toBeTruthy();
  }));
});
