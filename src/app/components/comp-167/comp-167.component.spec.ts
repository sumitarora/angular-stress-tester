import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp167Component } from './comp-167.component';
import { Service167Service } from '../../services/service-167.service';

describe('Comp167Component', () => {
  let component: Comp167Component;
  let fixture: ComponentFixture<Comp167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp167Component ],
providers: [Service167Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
