import { TestBed, inject } from '@angular/core/testing';

import { Service297Service } from './service-297.service';

describe('Service297Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service297Service]
    });
  });

  it('should ...', inject([Service297Service], (service: Service297Service) => {
    expect(service).toBeTruthy();
  }));
});
