import { TestBed, inject } from '@angular/core/testing';

import { Service428Service } from './service-428.service';

describe('Service428Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service428Service]
    });
  });

  it('should ...', inject([Service428Service], (service: Service428Service) => {
    expect(service).toBeTruthy();
  }));
});
