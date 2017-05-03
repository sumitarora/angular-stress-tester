import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp637Component } from './comp-637.component';
import { Service637Service } from '../../services/service-637.service';

describe('Comp637Component', () => {
  let component: Comp637Component;
  let fixture: ComponentFixture<Comp637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp637Component ],
providers: [Service637Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
