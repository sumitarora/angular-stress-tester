import { TestBed, inject } from '@angular/core/testing';

import { Service379Service } from './service-379.service';

describe('Service379Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service379Service]
    });
  });

  it('should ...', inject([Service379Service], (service: Service379Service) => {
    expect(service).toBeTruthy();
  }));
});
