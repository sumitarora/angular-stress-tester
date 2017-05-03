import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp239Component } from './comp-239.component';
import { Service239Service } from '../../services/service-239.service';

describe('Comp239Component', () => {
  let component: Comp239Component;
  let fixture: ComponentFixture<Comp239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp239Component ],
providers: [Service239Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
