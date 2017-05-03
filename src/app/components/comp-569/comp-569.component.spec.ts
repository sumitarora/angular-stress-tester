import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp569Component } from './comp-569.component';
import { Service569Service } from '../../services/service-569.service';

describe('Comp569Component', () => {
  let component: Comp569Component;
  let fixture: ComponentFixture<Comp569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp569Component ],
providers: [Service569Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
