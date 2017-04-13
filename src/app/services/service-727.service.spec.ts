import { TestBed, inject } from '@angular/core/testing';

import { Service727Service } from './service-727.service';

describe('Service727Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service727Service]
    });
  });

  it('should ...', inject([Service727Service], (service: Service727Service) => {
    expect(service).toBeTruthy();
  }));
});
