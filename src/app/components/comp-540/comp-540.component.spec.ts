import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp540Component } from './comp-540.component';
import { Service540Service } from '../../services/service-540.service';

describe('Comp540Component', () => {
  let component: Comp540Component;
  let fixture: ComponentFixture<Comp540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp540Component ],
providers: [Service540Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
