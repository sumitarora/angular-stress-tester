import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp499Component } from './comp-499.component';
import { Service499Service } from '../../services/service-499.service';

describe('Comp499Component', () => {
  let component: Comp499Component;
  let fixture: ComponentFixture<Comp499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp499Component ],
providers: [Service499Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
