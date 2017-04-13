import { TestBed, inject } from '@angular/core/testing';

import { Service980Service } from './service-980.service';

describe('Service980Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service980Service]
    });
  });

  it('should ...', inject([Service980Service], (service: Service980Service) => {
    expect(service).toBeTruthy();
  }));
});
