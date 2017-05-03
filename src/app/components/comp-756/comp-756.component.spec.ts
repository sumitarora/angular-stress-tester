import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp756Component } from './comp-756.component';
import { Service756Service } from '../../services/service-756.service';

describe('Comp756Component', () => {
  let component: Comp756Component;
  let fixture: ComponentFixture<Comp756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp756Component ],
providers: [Service756Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
