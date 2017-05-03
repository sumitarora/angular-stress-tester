import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp814Component } from './comp-814.component';
import { Service814Service } from '../../services/service-814.service';

describe('Comp814Component', () => {
  let component: Comp814Component;
  let fixture: ComponentFixture<Comp814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp814Component ],
providers: [Service814Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
