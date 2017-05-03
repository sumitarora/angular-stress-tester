import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp400Component } from './comp-400.component';
import { Service400Service } from '../../services/service-400.service';

describe('Comp400Component', () => {
  let component: Comp400Component;
  let fixture: ComponentFixture<Comp400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp400Component ],
providers: [Service400Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
