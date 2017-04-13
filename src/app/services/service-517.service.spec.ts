import { TestBed, inject } from '@angular/core/testing';

import { Service517Service } from './service-517.service';

describe('Service517Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service517Service]
    });
  });

  it('should ...', inject([Service517Service], (service: Service517Service) => {
    expect(service).toBeTruthy();
  }));
});
