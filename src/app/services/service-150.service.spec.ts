import { TestBed, inject } from '@angular/core/testing';

import { Service150Service } from './service-150.service';

describe('Service150Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service150Service]
    });
  });

  it('should ...', inject([Service150Service], (service: Service150Service) => {
    expect(service).toBeTruthy();
  }));
});
