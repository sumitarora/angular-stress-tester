import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp574Component } from './comp-574.component';
import { Service574Service } from '../../services/service-574.service';

describe('Comp574Component', () => {
  let component: Comp574Component;
  let fixture: ComponentFixture<Comp574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp574Component ],
providers: [Service574Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
