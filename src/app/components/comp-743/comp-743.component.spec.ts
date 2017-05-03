import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp743Component } from './comp-743.component';
import { Service743Service } from '../../services/service-743.service';

describe('Comp743Component', () => {
  let component: Comp743Component;
  let fixture: ComponentFixture<Comp743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp743Component ],
providers: [Service743Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
