import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp306Component } from './comp-306.component';
import { Service306Service } from '../../services/service-306.service';

describe('Comp306Component', () => {
  let component: Comp306Component;
  let fixture: ComponentFixture<Comp306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp306Component ],
providers: [Service306Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
