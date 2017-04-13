import { TestBed, inject } from '@angular/core/testing';

import { Service415Service } from './service-415.service';

describe('Service415Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service415Service]
    });
  });

  it('should ...', inject([Service415Service], (service: Service415Service) => {
    expect(service).toBeTruthy();
  }));
});
