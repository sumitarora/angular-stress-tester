import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp494Component } from './comp-494.component';
import { Service494Service } from '../../services/service-494.service';

describe('Comp494Component', () => {
  let component: Comp494Component;
  let fixture: ComponentFixture<Comp494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp494Component ],
providers: [Service494Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
