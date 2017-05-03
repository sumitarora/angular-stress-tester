import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp198Component } from './comp-198.component';
import { Service198Service } from '../../services/service-198.service';

describe('Comp198Component', () => {
  let component: Comp198Component;
  let fixture: ComponentFixture<Comp198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp198Component ],
providers: [Service198Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
