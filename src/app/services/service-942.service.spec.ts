import { TestBed, inject } from '@angular/core/testing';

import { Service942Service } from './service-942.service';

describe('Service942Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service942Service]
    });
  });

  it('should ...', inject([Service942Service], (service: Service942Service) => {
    expect(service).toBeTruthy();
  }));
});
