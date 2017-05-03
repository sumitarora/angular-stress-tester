import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp941Component } from './comp-941.component';
import { Service941Service } from '../../services/service-941.service';

describe('Comp941Component', () => {
  let component: Comp941Component;
  let fixture: ComponentFixture<Comp941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp941Component ],
providers: [Service941Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
