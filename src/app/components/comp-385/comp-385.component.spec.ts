import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp385Component } from './comp-385.component';
import { Service385Service } from '../../services/service-385.service';

describe('Comp385Component', () => {
  let component: Comp385Component;
  let fixture: ComponentFixture<Comp385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp385Component ],
providers: [Service385Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
