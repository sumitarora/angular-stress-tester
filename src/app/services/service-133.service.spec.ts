import { TestBed, inject } from '@angular/core/testing';

import { Service133Service } from './service-133.service';

describe('Service133Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service133Service]
    });
  });

  it('should ...', inject([Service133Service], (service: Service133Service) => {
    expect(service).toBeTruthy();
  }));
});
