import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp928Component } from './comp-928.component';
import { Service928Service } from '../../services/service-928.service';

describe('Comp928Component', () => {
  let component: Comp928Component;
  let fixture: ComponentFixture<Comp928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp928Component ],
providers: [Service928Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
