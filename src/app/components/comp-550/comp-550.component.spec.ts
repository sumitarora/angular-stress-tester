import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp550Component } from './comp-550.component';
import { Service550Service } from '../../services/service-550.service';

describe('Comp550Component', () => {
  let component: Comp550Component;
  let fixture: ComponentFixture<Comp550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp550Component ],
providers: [Service550Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
