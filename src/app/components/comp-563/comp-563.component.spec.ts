import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp563Component } from './comp-563.component';
import { Service563Service } from '../../services/service-563.service';

describe('Comp563Component', () => {
  let component: Comp563Component;
  let fixture: ComponentFixture<Comp563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp563Component ],
providers: [Service563Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
