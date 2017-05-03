import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp579Component } from './comp-579.component';
import { Service579Service } from '../../services/service-579.service';

describe('Comp579Component', () => {
  let component: Comp579Component;
  let fixture: ComponentFixture<Comp579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp579Component ],
providers: [Service579Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
