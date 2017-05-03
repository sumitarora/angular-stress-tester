import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp247Component } from './comp-247.component';
import { Service247Service } from '../../services/service-247.service';

describe('Comp247Component', () => {
  let component: Comp247Component;
  let fixture: ComponentFixture<Comp247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp247Component ],
providers: [Service247Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
