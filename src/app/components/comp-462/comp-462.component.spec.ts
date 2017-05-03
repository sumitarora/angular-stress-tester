import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp462Component } from './comp-462.component';
import { Service462Service } from '../../services/service-462.service';

describe('Comp462Component', () => {
  let component: Comp462Component;
  let fixture: ComponentFixture<Comp462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp462Component ],
providers: [Service462Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
