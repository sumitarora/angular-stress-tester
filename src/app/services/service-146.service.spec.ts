import { TestBed, inject } from '@angular/core/testing';

import { Service146Service } from './service-146.service';

describe('Service146Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service146Service]
    });
  });

  it('should ...', inject([Service146Service], (service: Service146Service) => {
    expect(service).toBeTruthy();
  }));
});
