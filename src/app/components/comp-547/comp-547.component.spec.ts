import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp547Component } from './comp-547.component';
import { Service547Service } from '../../services/service-547.service';

describe('Comp547Component', () => {
  let component: Comp547Component;
  let fixture: ComponentFixture<Comp547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp547Component ],
providers: [Service547Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
