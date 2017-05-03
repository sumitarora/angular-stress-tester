import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp992Component } from './comp-992.component';
import { Service992Service } from '../../services/service-992.service';

describe('Comp992Component', () => {
  let component: Comp992Component;
  let fixture: ComponentFixture<Comp992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp992Component ],
providers: [Service992Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
