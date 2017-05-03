import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp686Component } from './comp-686.component';
import { Service686Service } from '../../services/service-686.service';

describe('Comp686Component', () => {
  let component: Comp686Component;
  let fixture: ComponentFixture<Comp686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp686Component ],
providers: [Service686Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
