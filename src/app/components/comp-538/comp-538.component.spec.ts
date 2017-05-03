import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp538Component } from './comp-538.component';
import { Service538Service } from '../../services/service-538.service';

describe('Comp538Component', () => {
  let component: Comp538Component;
  let fixture: ComponentFixture<Comp538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp538Component ],
providers: [Service538Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
