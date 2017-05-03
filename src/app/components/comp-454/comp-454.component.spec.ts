import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp454Component } from './comp-454.component';
import { Service454Service } from '../../services/service-454.service';

describe('Comp454Component', () => {
  let component: Comp454Component;
  let fixture: ComponentFixture<Comp454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp454Component ],
providers: [Service454Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
