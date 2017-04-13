import { TestBed, inject } from '@angular/core/testing';

import { Service929Service } from './service-929.service';

describe('Service929Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service929Service]
    });
  });

  it('should ...', inject([Service929Service], (service: Service929Service) => {
    expect(service).toBeTruthy();
  }));
});
