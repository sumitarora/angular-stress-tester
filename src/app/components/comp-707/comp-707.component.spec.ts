import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp707Component } from './comp-707.component';
import { Service707Service } from '../../services/service-707.service';

describe('Comp707Component', () => {
  let component: Comp707Component;
  let fixture: ComponentFixture<Comp707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp707Component ],
providers: [Service707Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
