import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp917Component } from './comp-917.component';
import { Service917Service } from '../../services/service-917.service';

describe('Comp917Component', () => {
  let component: Comp917Component;
  let fixture: ComponentFixture<Comp917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp917Component ],
providers: [Service917Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
