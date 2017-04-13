import { TestBed, inject } from '@angular/core/testing';

import { Service618Service } from './service-618.service';

describe('Service618Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service618Service]
    });
  });

  it('should ...', inject([Service618Service], (service: Service618Service) => {
    expect(service).toBeTruthy();
  }));
});
