import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp47Component } from './comp-47.component';
import { Service47Service } from '../../services/service-47.service';

describe('Comp47Component', () => {
  let component: Comp47Component;
  let fixture: ComponentFixture<Comp47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp47Component ],
providers: [Service47Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
