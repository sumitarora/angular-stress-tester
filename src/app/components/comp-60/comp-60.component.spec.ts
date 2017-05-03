import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp60Component } from './comp-60.component';
import { Service60Service } from '../../services/service-60.service';

describe('Comp60Component', () => {
  let component: Comp60Component;
  let fixture: ComponentFixture<Comp60Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp60Component ],
providers: [Service60Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
