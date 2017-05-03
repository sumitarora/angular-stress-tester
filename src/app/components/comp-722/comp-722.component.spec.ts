import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp722Component } from './comp-722.component';
import { Service722Service } from '../../services/service-722.service';

describe('Comp722Component', () => {
  let component: Comp722Component;
  let fixture: ComponentFixture<Comp722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp722Component ],
providers: [Service722Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
