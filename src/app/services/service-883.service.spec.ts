import { TestBed, inject } from '@angular/core/testing';

import { Service883Service } from './service-883.service';

describe('Service883Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service883Service]
    });
  });

  it('should ...', inject([Service883Service], (service: Service883Service) => {
    expect(service).toBeTruthy();
  }));
});
