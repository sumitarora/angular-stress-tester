import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp602Component } from './comp-602.component';
import { Service602Service } from '../../services/service-602.service';

describe('Comp602Component', () => {
  let component: Comp602Component;
  let fixture: ComponentFixture<Comp602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp602Component ],
providers: [Service602Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
