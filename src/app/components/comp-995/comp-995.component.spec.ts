import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp995Component } from './comp-995.component';
import { Service995Service } from '../../services/service-995.service';

describe('Comp995Component', () => {
  let component: Comp995Component;
  let fixture: ComponentFixture<Comp995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp995Component ],
providers: [Service995Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
