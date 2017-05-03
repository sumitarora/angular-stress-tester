import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp845Component } from './comp-845.component';
import { Service845Service } from '../../services/service-845.service';

describe('Comp845Component', () => {
  let component: Comp845Component;
  let fixture: ComponentFixture<Comp845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp845Component ],
providers: [Service845Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
