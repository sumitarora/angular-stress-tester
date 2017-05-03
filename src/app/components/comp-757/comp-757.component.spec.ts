import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp757Component } from './comp-757.component';
import { Service757Service } from '../../services/service-757.service';

describe('Comp757Component', () => {
  let component: Comp757Component;
  let fixture: ComponentFixture<Comp757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp757Component ],
providers: [Service757Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
