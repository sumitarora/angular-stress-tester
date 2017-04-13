import { TestBed, inject } from '@angular/core/testing';

import { Service773Service } from './service-773.service';

describe('Service773Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service773Service]
    });
  });

  it('should ...', inject([Service773Service], (service: Service773Service) => {
    expect(service).toBeTruthy();
  }));
});
