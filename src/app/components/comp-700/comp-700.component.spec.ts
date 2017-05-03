import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp700Component } from './comp-700.component';
import { Service700Service } from '../../services/service-700.service';

describe('Comp700Component', () => {
  let component: Comp700Component;
  let fixture: ComponentFixture<Comp700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp700Component ],
providers: [Service700Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
