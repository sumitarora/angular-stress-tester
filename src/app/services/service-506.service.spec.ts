import { TestBed, inject } from '@angular/core/testing';

import { Service506Service } from './service-506.service';

describe('Service506Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service506Service]
    });
  });

  it('should ...', inject([Service506Service], (service: Service506Service) => {
    expect(service).toBeTruthy();
  }));
});
