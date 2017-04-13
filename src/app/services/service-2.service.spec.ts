import { TestBed, inject } from '@angular/core/testing';

import { Service2Service } from './service-2.service';

describe('Service2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service2Service]
    });
  });

  it('should ...', inject([Service2Service], (service: Service2Service) => {
    expect(service).toBeTruthy();
  }));
});
