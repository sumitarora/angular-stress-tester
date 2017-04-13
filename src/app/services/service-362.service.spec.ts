import { TestBed, inject } from '@angular/core/testing';

import { Service362Service } from './service-362.service';

describe('Service362Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service362Service]
    });
  });

  it('should ...', inject([Service362Service], (service: Service362Service) => {
    expect(service).toBeTruthy();
  }));
});
